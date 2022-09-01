import * as fs from "fs/promises";
import { parse } from "./openapi/openApi/v2/index.js";
import { postProcessClient } from "./openapi/utils/postProcessClient.js";
import type { Model } from "./openapi/client/interfaces/Model";
import prettier from "prettier";

const apiData = JSON.parse(
  (await fs.readFile("./c-lightning-rest.swagger.json")).toString("utf-8")
);

const parsed = parse(apiData);
const processed = postProcessClient(parsed);
let generatedMethods = "";
let typeImports = "";

function propertiesToInterfaceRecursive(model: Model[]) {
  let output = "";
  for (const property of model) {
    if (property.export === "enum") {
    } else if (property.properties && property.properties.length !== 0) {
      for (const property2 of property.properties) {
        if (property2.export === "generic" && property.type !== "object") {
          output += `/** ${property2.description} */\n${property2.name}${
            property2.isRequired ? ":" : "?:"
          } ${property2.type};\n`;
        } else {
          output += `/** ${property2.description} */\n${property2.name}${
            property2.isRequired ? ":" : "?:"
          } {\n${propertiesToInterfaceRecursive(property2.properties)}};\n`;
        }
      }
    } else {
      output += `/** ${property.description} */\n${property.name}${
        property.isRequired ? ":" : "?:"
      } ${property.type};\n`;
    }
  }
  return output;
}
for (const service of processed.services) {
  for (const operation of service.operations) {
    let bodyParams = 0;
    let queryParams = 0;
    let queryInterface = "";
    let bodyInterface = "";
    let responseInterface = "";
    for (const parameter of operation.parameters) {
      if (parameter.in == "query") {
        queryInterface += `/** ${parameter.description} */\n${parameter.prop}: ${parameter.type};\n`;
        queryParams++;
      }
      if (parameter.in == "body") {
        bodyInterface += `/** ${parameter.description} */\n${parameter.prop}: ${parameter.type};\n`;
        bodyParams++;
      }
    }
    if (operation.results.length !== 1) console.log(operation.name);
    for (const property of operation.results[0].properties) {
      if (!property.properties || property.properties.length === 0)
        responseInterface += `/** ${property.description} */\n${property.name}${
          property.isRequired ? ":" : "?:"
        } ${property.type};\n`;
      else {
        //console.log(property.properties);
        responseInterface += `/** ${property.description} */\n${property.name}${
          property.isRequired ? ":" : "?:"
        } {\n${propertiesToInterfaceRecursive(property.properties)}};\n`;
      }
    }
    operation.name = operation.name.replace(operation.method.toLowerCase(), "");
    bodyInterface = `export interface ${operation.name}RequestBody {\n${bodyInterface}}\n`;
    queryInterface = `export interface ${operation.name}RequestQuery {\n${queryInterface}}\n`;
    responseInterface = `export interface ${operation.name}Response {\n${responseInterface}}\n`;
    let args = "";
    let reqArgs = "";
    let interfaceFile = "";
    let localImports = "";
    if (queryParams != 0) {
      interfaceFile += queryInterface;
      localImports += `${operation.name}RequestQuery,`;
      args += `queryParams: ${operation.name}RequestQuery`;
      reqArgs += ", queryParams";
    } else {
      reqArgs += ", null";
    }
    if (bodyParams != 0) {
      interfaceFile += bodyInterface;
      localImports += `${operation.name}RequestBody,`;
      if (queryParams != 0) {
        args += ",";
      }
      args += `bodyParams: ${operation.name}RequestBody`;
      reqArgs += ", bodyParams";
    }

    typeImports += `import type { ${operation.name}Response, ${localImports}} from "./${operation.name}";\n`;
    interfaceFile += `\n${responseInterface}`;
    await fs.writeFile(
      `./packages/rest/src/generated/${operation.name}.ts`,
      prettier.format(interfaceFile, {
        parser: "typescript",
      })
    );
    generatedMethods += `\n\n   ${
      operation.name.charAt(0).toLowerCase() + operation.name.substring(1)
    }(${args}) {
        return this.req<${operation.name}Response>("${operation.method}", "${operation.path}"${reqArgs});
    }`;
  }
}

await fs.writeFile(
  "./packages/rest/src/generated/index.ts",
  prettier.format(
    `/// <reference lib="DOM" />

${typeImports}
import ApiClient, { transform } from "@core-ln/base";

/**
 * An API client for the c-lightning REST plugin
 * 
 * Only works when the rest-rpc option is set to *
 * 
 * This is designed to be used in a browser and will not work server-side in Node versions < 18
 */
export default class RestApiClient extends ApiClient {
    /**
     * @param _apiUrl The URL where the rest API is available
     * @param _macaroon The base64-encoded macaroon
     * @param _transform Set this to false if you don't want any transformation to be done (like msat values from string to BigInt)
                        If false, some types may appear different than what they are in TypeScript
     */
    constructor(private _apiUrl: string, private _macaroon: string, private _transform = true) {
        super();
    }

    async call<ReturnType>(method: string, params: unknown): Promise<ReturnType> {
        const data = await fetch(this._apiUrl.endsWith("/") ? \`\${this._apiUrl}v1/rpc\` : \`\${this._apiUrl}/v1/rpc\`, {
            headers: {
                "Content-Type": "application/json",
                macaroon: this._macaroon,
            },
            method: "POST",
            body: JSON.stringify({
                method,
                params
            }),
        });
        const parsedData = await data.json();
        return transform<ReturnType>(parsedData);
    }

    async req<ReturnType>(
      method: string,
      path: string,
      queryParams: unknown,
      bodyParams?: unknown
    ): Promise<ReturnType> {
      let generatedQuery = "?";
      let queryParamsTyped = queryParams as Record<string, string>;
      if (queryParams) {
        let isFirst = true;
        for (const param in queryParamsTyped) {
          if (isFirst) {
            generatedQuery += \`\${param}=\${queryParamsTyped[param]}\`;
          } else {
            generatedQuery += \`&\${param}=\${queryParamsTyped[param]}\`;
          }
          isFirst = false;
        }
      }
      if (generatedQuery !== "?") path += generatedQuery;
      const data = await fetch(
        this._apiUrl.endsWith("/")
          ? \`\${this._apiUrl}\${path.substring(1)}\`
          : \`\${this._apiUrl}\${path}\`,
        {
          headers: {
            macaroon: this._macaroon,
            ...(bodyParams ? { "Content-Type": "application/json" } : {}),
          },
          method,
          ...(bodyParams ? { body: JSON.stringify(bodyParams) } : {}),
        }
      );
      return await data.json() as ReturnType;
    }
  
  ${generatedMethods}
}`,
    {
      parser: "typescript",
    }
  )
);
