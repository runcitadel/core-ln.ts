import { camelCase, pascalCase } from "https://deno.land/x/case@2.1.1/mod.ts";
import quicktypeCore from "https://esm.sh/quicktype-core@6.0.71";
import ts from "https://esm.sh/typescript@4.7.4";
import { resolve } from "https://deno.land/std@0.146.0/path/mod.ts";
import prettier from "https://esm.sh/prettier@2.7.1";
import parserTypescript from "https://esm.sh/prettier@2.7.1/parser-typescript.js";
import parserEspree from "https://esm.sh/prettier@2.7.1/parser-espree.js";

function getExports(
    tsFile: string,
    complierOpts: ts.CompilerOptions = { allowJs: true },
  ): ts.Symbol[] {
    const fName = resolve(tsFile);
    const program = ts.createProgram([fName], complierOpts);
    const checker = program.getTypeChecker();
    const sourceFile = program.getSourceFile(fName);
    if (!sourceFile) return [];
    const exportSymbol = checker.getSymbolAtLocation(sourceFile?.getChildAt(0));
    // @ts-expect-error see: https://stackoverflow.com/questions/62865648/how-should-i-get-common-js-exports-with-the-typescript-compiler-api
    const exps = checker.getExportsAndPropertiesOfModule(
      // @ts-expect-error see: https://stackoverflow.com/questions/62865648/how-should-i-get-common-js-exports-with-the-typescript-compiler-api
      exportSymbol || sourceFile.symbol,
    );
    return exps;
  }

const { quicktype, InputData, JSONSchemaInput, FetchingJSONSchemaStore } =
  quicktypeCore;

// Recursively find all keys of an object called "type", then set them to "string" if they are "hex"
function fixTypes(obj: any) {
  if (
    obj &&
    (obj.type === "hex" ||
      obj.type === "txid" ||
      obj.type == "pubkey" ||
      obj.type === "signature" ||
      obj.type === "short_channel_id" ||
      obj.type === "point32" ||
      obj.type === "bip340sig" ||
      obj.type === "secret" ||
      obj.type === "hash")
  ) {
    obj.type = `string`;
  }
  if (
    obj &&
    (obj.type === "u8" || obj.type === "u16" || obj.type === "u32" ||
      obj.type === "msat" || obj.type === "u64")
  ) {
    obj.type = `number`;
  }
  if (obj && typeof obj === "object") {
    Object.keys(obj).forEach((key) => {
      if (obj[key] && obj[key].deprecated) delete obj[key];
      fixTypes(obj[key]);
    });
  }
}
const decodeSchema = JSON.parse(
  Deno.readTextFileSync("lightning/doc/schemas/decode.schema.json"),
);


const allOfs = decodeSchema.allOf as any[];
let outputImports = "";
let outputExports = "";
const types = [];
Deno.mkdirSync(`./packages/base/src/generated/decode`, { recursive: true });
Deno.mkdirSync(`./packages/deno/base/generated/decode`, { recursive: true });

const isEnum = (symbol: ts.Symbol) => symbol.valueDeclaration?.kind === ts.SyntaxKind.EnumDeclaration;
for (const e of allOfs) {
    let elem = e.then;
    fixTypes(elem);
    fixTypes(e);
    const newSchema = {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        required: [...elem.required, ...decodeSchema.required],
        "additionalProperties": false,
        properties: {...decodeSchema.properties, ...elem.properties, ...e.if.properties},
    };
    const prefix = `${e.if.properties.valid.enum[0] ? "Valid": "Invalid"}${pascalCase(e.if.properties.type.enum[0])}`;
    const mainName = `${prefix}DecodeResponse`;
    types.push(mainName);
    const { lines: outputLines } = await quicktypeJSONSchema(
      "typescript",
      mainName,
      JSON.stringify(newSchema),
    );
    const typeExportIndex = outputLines.indexOf("export enum Type {");
    outputLines.splice(typeExportIndex, 3);
    let unprocessedOutput = outputLines.join("\n");
    unprocessedOutput = unprocessedOutput.replace(" Type;", ` "${e.if.properties.type.enum[0]}"`);
    const outputFile = `${e.if.properties.type.enum[0]}_${e.if.properties.valid.enum[0] ? "valid": "invalid"}.ts`;
    Deno.writeTextFileSync(`./packages/base/src/generated/decode/${outputFile}`, unprocessedOutput);
    Deno.writeTextFileSync(`./packages/deno/base/generated/decode/${outputFile}`, unprocessedOutput);
    outputImports += `import { ${mainName} } from "./${outputFile}";\n`;
    const exports = getExports(`./packages/base/src/generated/decode/${outputFile}`);
    // Get all exports except mainName
    const exportsToExport = exports.filter((e) => e.name !== mainName);
    outputExports += `export { type ${mainName}, ${exportsToExport.map((e) => `${isEnum(e) ? "" : "type "}${e.name} as ${prefix}${pascalCase(e.name)}`).join(", ")} } from "./${outputFile}";\n`;
}

const finalOutput = `
${outputImports}

export type DecodeResponse = ${types.join(" | ")};
    
${outputExports}
`;
    
Deno.writeTextFileSync(`./packages/base/src/generated/decode/response.ts`, finalOutput);
Deno.writeTextFileSync(`./packages/deno/base/generated/decode/response.ts`, finalOutput);


async function quicktypeJSONSchema(
  targetLanguage: string,
  typeName: string,
  jsonSchemaString: string,
) {
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
      "just-types": "true",
    },
  });
}

