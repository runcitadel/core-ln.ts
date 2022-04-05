import * as fs from "fs";
import * as fsPromises from "fs/promises";
import camelcase from "camelcase";
import pascalcase from "pascalcase";
import quicktypeCore from "quicktype-core";
import ts from 'typescript';
import { resolve } from 'path';
import prettier from "prettier";

// Join two strings and make the first character of each uppercase
function joinUpperCaseFirst(a: string, b: string) {
  return a.charAt(0).toUpperCase() + a.slice(1) + b.charAt(0).toUpperCase() + b.slice(1);
}

function getExports(tsFile: string, complierOpts: ts.CompilerOptions = { allowJs: true }): ts.Symbol[] {
  const fName = resolve(tsFile);
  if (!fs.existsSync(fName)) {
    throw new Error(`The file ${fName} does not exist`);
  }
  const program = ts.createProgram([fName], complierOpts);
  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(fName);
  if (!sourceFile) return [];
  const exportSymbol = checker.getSymbolAtLocation(sourceFile?.getChildAt(0));
  // @ts-expect-error see: https://stackoverflow.com/questions/62865648/how-should-i-get-common-js-exports-with-the-typescript-compiler-api
  const exps = checker.getExportsAndPropertiesOfModule(exportSymbol || sourceFile.symbol);
  return exps;  
}

export function isObject(item: any): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target: any, ...sources: any[]): any {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

const {
  quicktype,
  InputData,
  JSONSchemaInput,
  FetchingJSONSchemaStore,
} = quicktypeCore;

const transformMap: any = {};
const transformKeys: Record<string, string[]> = {};
/**
 * Parse a synopsis
 *
 * A synopsis looks something like this
 *
 * **offer** *amount* *description* \[*issuer*\] \[*label*\] \[*quantity_min*\] \[*quantity_max*\] \[*absolute_expiry*\] \[*recurrence*\] \[*recurrence_base*\] \[*recurrence_paywindow*\] \[*recurrence_limit*\] \[*single_use*\]
 *
 * The part in ** ** is the name of the command
 * Everything in * * is a parameter
 * Everything in \[\] is an optional parameter
 * @param synopsis The synopsis to parse
 */

function parseSynopsis(synopsis: string): {
  name: string;
  parameters: string[];
  optionalParameters: string[];
} {
  const parts = synopsis.replaceAll("\\_", "_").split("**");
  if (!parts[1]) {
    console.log(synopsis);
  }
  const name = parts[1].trim();
  const parameters = parts[2]
    .split("[")[0]
    .split("*")
    .map((p) => p.trim().replaceAll("\\", ""));
  // Remove all values which are ""
  parameters.forEach((p, i) => {
    if (p === "") {
      parameters.splice(i, 1);
    }
  });
  const optionalParameters: string[] = [];
  if (parts[2].split("[")[1]) {
    const split = parts[2].split("[");
    split.shift();
    split.forEach((p) => {
      if (!p.split("*")[1]) {
        console.log(p);
      }
      optionalParameters.push(p.split("*")[1].trim().replaceAll("\\", ""));
    });
  }
  return {
    name,
    parameters,
    optionalParameters,
  };
}

function parsedSynopsisToTsInterface(synopsis: {
  name: string;
  parameters: string[];
  optionalParameters: string[];
}) {
  let result = `export interface ${pascalcase(synopsis.name)}Request {`;
  synopsis.parameters.forEach((p) => {
    result += `\n  ${p}: /* GUESSED */ string;`;
  });
  synopsis.optionalParameters.forEach((p) => {
    result += `\n  ${p}?: /* GUESSED */ string;`;
  });
  result += "\n}";
  return result;
}

// Recursively find all keys of an object called "type", then set them to "string" if they are "hex"
function fixHex(obj: any, method: string, key: string, parents: string[] = []) {
  if (
    obj &&
    (obj.type === "hex" ||
      obj.type === "txid" ||
      obj.type == "pubkey" ||
      obj.type === "signature" ||
      obj.type === "short_channel_id" ||
      obj.type === "point32" ||
      obj.type === "bip340sig")
  ) {
    obj.type = `string`;
  }
  if (
    obj &&
    (obj.type === "u8" || obj.type === "u16" || obj.type === "u32")
  ) {
    obj.type = `number`;
  }
  if (obj && obj.type === "msat") {
    if(parents.length !== 0) {
      const maybeAdd = parents.reduceRight((all, item) => ({[item]: all}), {});
      mergeDeep(transformMap, maybeAdd);
      let lastElement = transformMap;
        for(const key of parents) {
          if(parents.indexOf(key) === parents.length - 1) {
            lastElement[key] = obj.type;
          }
          lastElement = lastElement[key];
      }
      // This is just a hack for nested properties and will lead to issues if there are
      // multiple properties with the same name
      // TODO: Improve this logic
      if(!transformKeys[method]) transformKeys[method] = [];
      transformKeys[method].push(key);
    } else {
      if(!transformMap[method]) transformMap[method] = {};
      if(!transformKeys[method]) transformKeys[method] = [];
      if(!transformMap[method][key]) transformMap[method][key] = obj.type;
      transformKeys[method].push(key);
    }
    obj.type = `number`;
  }
  if (obj && obj.type === "u64") {
    // We should look into BigInt
    obj.type = `number`;
  }
  if (obj && typeof obj === "object") {
    Object.keys(obj).forEach((key) => {
      if(obj[key] && obj[key].deprecated)
        delete obj[key];
      const newParents = [...parents];
      if(key !== "properties" && key !== "allOf" && key !== "oneOf" && Number.isNaN(Number(key)) && key !== "then" && key !== "if" && key !== "items")
      newParents.push(key);
      fixHex(obj[key], method, key, newParents);
    });
  }
}

const files = fs.readdirSync("./lightning/doc");
let imports = "";
let exports = "";
let generatedMethods = "";

for (const file of files) {
  if (file.endsWith(".7.md")) {
    console.log(`Parsing ${file}...`);
    const fileName = file.replace(".7.md", "").replace("lightning-", "");
    const fileContents = fs.readFileSync("./lightning/doc/" + file, "utf8");
    const jsonSchema = JSON.parse(
      fs.readFileSync(
        "./lightning/doc/schemas/" + fileName + ".schema.json",
        "utf8"
      )
    );
    const lines = fileContents.split("\n");
    const heading = lines[0];
    // Get the line that contains "DESCRIPTION"
    const descriptionLine = lines.findIndex((line) =>
      line.includes("DESCRIPTION")
    );
    const responseLine = lines.findIndex((line) =>
      line.includes("RETURN VALUE")
    );
    // All lines between description and return value
    // Except the lines themselves and the line directly after the description
    const descriptionLines =
      "/**" +
      lines
        .slice(descriptionLine + 2, responseLine - 1)
        .join("\n * ")
        .replaceAll("\\", "")
        .replaceAll("*/", "*\\/") +
      "\n*/";
    const methodDescriptionLines =
      "/**" +
      lines
        .slice(descriptionLine + 2, responseLine - 1)
        .join("\n   * ")
        .replaceAll("\\", "")
        .replaceAll("*/", "*\\/") +
      "\n  */";
    // Go backwards in lines from descriptionLine - 2 until we find an empty line,
    // Then join the lines with a space
    let realSynopsis = "";
    for (let i = descriptionLine - 2; i >= 0; i--) {
      if (lines[i].trim() === "") {
        break;
      }
      // If the line starts with an uppercase letter, go back two lines and skip this one
      if (lines[i].trim().match(/^[A-Z]/)) {
        i--;
        continue;
      }
      realSynopsis = lines[i] + " " + realSynopsis;
    }
    const parsedSynopsis = parseSynopsis(realSynopsis);
    fixHex(jsonSchema, parsedSynopsis.name, "", [parsedSynopsis.name]);

  // Read the previous file
  let oldFile;
  try {
    oldFile = fs.readFileSync(`./packages/base/src/generated/${fileName}.ts`).toString("utf8").trim();
  } catch {
    oldFile = "";
  }
  const synopsisHasChanged = !(oldFile.startsWith(`/**
 * ${heading}
 * 
 * ${realSynopsis}
 * 
 */`) || oldFile.startsWith(`/**
 * ${heading}
 * 
 * ${realSynopsis.replaceAll("[", "\\[").replaceAll("]", "\\]")}
 * 
 */`));

  const oldSynopsis = "export " + oldFile.split("export")[1]?.trim();

  const { lines: outputLines } = await quicktypeJSONSchema(
    "typescript",
    pascalcase(parsedSynopsis.name) + "Response",
    JSON.stringify(jsonSchema)
  );
  let fullOutput = outputLines.join("\n");
  if(transformKeys[parsedSynopsis.name]) {
    for (const key of transformKeys[parsedSynopsis.name]) {
      fullOutput = fullOutput.replaceAll(
        `${key}: number;`,
        `${key}: bigint;`
      ).replaceAll(
        `${key}?: number;`,
        `${key}?: bigint;`
      );
    }
  }
    const tsFileContents = `/**
 * ${heading}
 * 
 * ${realSynopsis}
 * 
 */

${descriptionLines}
${synopsisHasChanged ? parsedSynopsisToTsInterface(parsedSynopsis) : oldSynopsis}

${fullOutput}
`;
    await fsPromises.writeFile(
      `./packages/base/src/generated/${fileName}.ts`,
      prettier.format(tsFileContents, {
        parser: "typescript",
      }),
    );

    const _exports = getExports(`./packages/base/src/generated/${fileName}.ts`);
    let stringExports = "";
    for (const symbol of _exports) {
      if (symbol.name === `${pascalcase(parsedSynopsis.name)}Request` || symbol.name === `${pascalcase(parsedSynopsis.name)}Response`) {
        stringExports += `${symbol.name}, `;
      } else {
        stringExports += `${symbol.name} as ${joinUpperCaseFirst(fileName, symbol.name)}, `;
      }
    }
    stringExports = stringExports.slice(0, -2);

    let fnArguments = "";
    const requestType = pascalcase(parsedSynopsis.name) + "Request";
    const responseType = pascalcase(parsedSynopsis.name) + "Response";
    fnArguments = "payload: " + requestType;
    // If the parsed synopsis has no required parameters, then we can use an empty payload
    if (parsedSynopsis.parameters.length == 0) fnArguments += " = {}";
    generatedMethods += `
  ${methodDescriptionLines}
  ${camelcase(parsedSynopsis.name)}(${fnArguments}): Promise<${responseType}> {
    return this.call<${responseType}>("${parsedSynopsis.name}", payload);
  }
    `;
    imports += `
import type { ${requestType}, ${responseType} } from "./${fileName}";`;
exports += `
export type { ${stringExports} } from "./${fileName}";`;
  }
}


await fsPromises.writeFile(
  "./packages/base/src/generated/main.ts",
  `import { EventEmitter } from "events";
${imports}

export const transformMap: any = ${JSON.stringify(transformMap, undefined, 2)}


function transformOne(element: string, to: "msat" | string): string | number | bigint {
  if(!element) {
    return element;
  }
  if(to === "msat") {
    // If element ends with msat, remove it and convert to bigint
    return BigInt(element.endsWith("msat") ? element.slice(0, -4) : element);
  }
  throw new Error("Transform not supported");
}

export function transform<ReturnType = unknown>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformMapData: any,
): ReturnType {
  if(typeof transformMapData === "string") return transformOne(data, transformMapData) as unknown as ReturnType;
  let key: string | Record<string, string> | Record<string, Record<string, string>>;
  for(key of Object.keys(transformMapData)) {
    if(!data[key]) continue;
    if(Array.isArray(data[key])) {
      //transformMapData[key] is an object.
      // For every key of that object, transform the value by converting every array element which matches the key
      // with _transformOne
      // data[key] is an array of objects
      data[key] = data[key].map((obj: Record<string, string | number | bigint>) => {
        for(const objKey of Object.keys(transformMapData[key as string])) {
          if(!obj || !obj[objKey] || !transformMapData[key as string][objKey]) continue;
          obj[objKey] = transform(obj[objKey] as string, transformMapData[key as string][objKey]);
        }
        return obj;
      });
    } else if(typeof data[key] !== "string") {
      // data[key] is an object
      //transformMapData[key] is an object.
      // For every key of transformMapData[key], transform the corresponing value of data[key] by converting with _transformOne
      for(const objKey of Object.keys(transformMapData[key as string])) {
        if(!data[key][objKey]) continue;
        data[key][objKey] = transform(data[key][objKey] as string, transformMapData[key as string][objKey]);
      }
    } else {
      data[key] = transformOne(data[key], transformMapData[key as string]);
    }
  }
    return data;
}
export default abstract class RPCClient extends EventEmitter {
  abstract call<ReturnType extends {} = {}>(method: string, params: unknown): Promise<ReturnType>
  ${generatedMethods}
}

${exports}
`
);

async function quicktypeJSONSchema(targetLanguage: string, typeName: string, jsonSchemaString: string) {
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());

  // We could add multiple schemas for multiple types,
  // but here we're just making one type from JSON schema.
  await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });

  const inputData = new InputData();
  inputData.addInput(schemaInput);

  return await quicktype({
    inputData,
    lang: targetLanguage,
    rendererOptions: {
      'just-types': "true",
    }
  });
}

