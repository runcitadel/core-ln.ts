import { camelCase, pascalCase } from "https://deno.land/x/case@2.1.1/mod.ts";
import quicktypeCore from "https://esm.sh/quicktype-core@6.0.71";
import ts from "https://esm.sh/typescript@4.7.4";
import { resolve } from "https://deno.land/std@0.146.0/path/mod.ts";
import prettier from "https://esm.sh/prettier@2.7.1";
import parserTypescript from "https://esm.sh/prettier@2.7.1/parser-typescript.js";
import parserEspree from "https://esm.sh/prettier@2.7.1/parser-espree.js";

// Join two strings and make the first character of each uppercase
function joinUpperCaseFirst(a: string, b: string) {
  return (
    a.charAt(0).toUpperCase() +
    a.slice(1) +
    b.charAt(0).toUpperCase() +
    b.slice(1)
  );
}

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

export function isObject(item: unknown): boolean {
  return (item && typeof item === "object" && !Array.isArray(item)) as boolean;
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(
  target: Record<string, unknown>,
  ...sources: Record<string, unknown>[]
): Record<string, unknown> {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(
          target[key] as Record<string, unknown>,
          source[key] as Record<string, unknown>,
        );
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

const { quicktype, InputData, JSONSchemaInput, FetchingJSONSchemaStore } =
  quicktypeCore;

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
      const split = p.split("*")[1] || p.substring(0, p.length - 1);
      if (!p.split("*")[1]) {
        console.log(p);
        console.log(`Resolved to ${split}`);
      }
      optionalParameters.push(split.trim().replaceAll("\\", ""));
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
  let result = `export interface ${pascalCase(synopsis.name)}Request {`;
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
function fixHex(obj: any) {
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
  if (obj && (obj.type === "u8" || obj.type === "u16" || obj.type === "u32")) {
    obj.type = `number`;
  }
  if (obj && obj.type === "msat") {
    obj.type = `number`;
  }
  if (obj && obj.type === "u64") {
    // We should look into BigInt
    obj.type = `number`;
  }
  if (obj && typeof obj === "object") {
    Object.keys(obj).forEach((key) => {
      if (obj[key] && obj[key].deprecated) delete obj[key];
      fixHex(obj[key]);
    });
  }
}

const files = [...Deno.readDirSync("./lightning/doc")].filter((file) =>
  file.name.endsWith(".7.md")
);

const imports = {
  node: "",
  deno: "",
};
const exports = {
  node: "",
  deno: "",
};
let generatedMethods = "";

for (const fileIndex in files) {
  const file = files[fileIndex];
  console.log(
    `Parsing ${file.name} (${Number(fileIndex) + 1}/${files.length})...`,
  );
  const fileName = file.name.replace(".7.md", "").replace("lightning-", "");
  if (fileName === "plugin" || fileName === "commando") {
    // Currently some details unknown, skip until I figured it out
    continue;
  }
  const fileContents = Deno.readTextFileSync("./lightning/doc/" + file.name)
    .replaceAll("\\", "")
    .replaceAll("*/*", "* / *");
  const jsonSchema = JSON.parse(
    Deno.readTextFileSync(
      "./lightning/doc/schemas/" + fileName + ".schema.json",
    ),
  );
  const lines = fileContents.split("\n");
  const heading = lines[0];
  // Get the line that contains "DESCRIPTION"
  const descriptionLine = lines.findIndex((line) =>
    line.includes("DESCRIPTION")
  );
  const responseLine = lines.findIndex((line) => line.includes("RETURN VALUE"));
  // All lines between description and return value
  // Except the lines themselves and the line directly after the description
  const descriptionLines = "/**" +
    lines
      .slice(descriptionLine + 2, responseLine - 1)
      .join("\n * ")
      .replaceAll("\\", "")
      .replaceAll("*/", "*\\/") +
    "\n*/";
  const methodDescriptionLines = "/**" +
    lines
      .slice(descriptionLine + 2, responseLine - 1)
      .join("\n   * ")
      .replaceAll("\\", "")
      .replaceAll("*/", "*\\/") +
    "\n  */";
  // Go backwards in lines from descriptionLine - 2 until we find an empty line,
  // Then join the lines with a space
  let realSynopsis = "";
  for (let i = descriptionLine - (fileName === "plugin" ? 3 : 2); i >= 0; i--) {
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
  fixHex(jsonSchema);

  // Read the previous file
  let oldFile;
  try {
    oldFile = Deno.readTextFileSync(
      `./packages/base/src/generated/${fileName}.ts`,
    ).trim();
  } catch {
    oldFile = "";
  }
  const synopsisHasChanged = !oldFile.startsWith(
    prettier
      .format(
        `/**
 * ${heading}
 * 
 * ${realSynopsis}
 * 
 */`,
        {
          parser: "espree",
          plugins: [parserEspree],
        },
      )
      .trim(),
  );

  const oldSynopsis = "export " + oldFile.split("export")[1]?.trim();

  const { lines: outputLines } = await quicktypeJSONSchema(
    "typescript",
    pascalCase(parsedSynopsis.name) + "Response",
    JSON.stringify(jsonSchema),
  );
  const fullOutput = outputLines.join("\n").replaceAll("*/*", "* / *")
  const tsFileContents = `/**
 * ${heading}
 * 
 * ${realSynopsis}
 * 
 */

${descriptionLines}
${
    synopsisHasChanged
      ? parsedSynopsisToTsInterface(parsedSynopsis)
      : oldSynopsis
  }

${fileName === "decode" ? "export * from \"./decode/response.ts\";" : fullOutput}
`;
  Deno.writeTextFileSync(
    `./packages/base/src/generated/${fileName}.ts`,
    prettier.format(tsFileContents.replace("export * from \"./decode/response.ts\";", "export * from \"./decode/response\";"), {
      parser: "typescript",
      plugins: [parserTypescript],
    }),
  );

  Deno.writeTextFileSync(
    `./packages/deno/base/generated/${fileName}.ts`,
    prettier.format(tsFileContents, {
      parser: "typescript",
      plugins: [parserTypescript],
    }),
  );

  const _exports = getExports(`./packages/base/generated/${fileName}.ts`);
  let stringExports = "";
  for (const symbol of _exports) {
    if (
      symbol.name === `${pascalCase(parsedSynopsis.name)}Request` ||
      symbol.name === `${pascalCase(parsedSynopsis.name)}Response`
    ) {
      stringExports += `type ${symbol.name}, `;
    } else {
      const isEnum =
        symbol.valueDeclaration?.kind === ts.SyntaxKind.EnumDeclaration;
      stringExports += `${isEnum ? "" : "type "}${symbol.name} as ${
        joinUpperCaseFirst(
          fileName,
          symbol.name,
        )
      }, `;
    }
  }
  stringExports = stringExports.slice(0, -2);

  let fnArguments = "";
  const requestType = pascalCase(parsedSynopsis.name) + "Request";
  const responseType = pascalCase(parsedSynopsis.name) + "Response";
  fnArguments = "payload: " + requestType;
  // If the parsed synopsis has no required parameters, then we can use an empty payload
  if (parsedSynopsis.parameters.length == 0) fnArguments += " = {}";
  generatedMethods += `
  ${methodDescriptionLines}
  ${camelCase(parsedSynopsis.name)}(${fnArguments}): Promise<${responseType}> {
    return this.call<${responseType}>("${parsedSynopsis.name}", payload);
  }
    `;
  imports.node += `
import type { ${requestType}, ${responseType} } from "./${fileName}";`;
  exports.node += `
export { ${stringExports} } from "./${fileName}";`;
  imports.deno += `
import type { ${requestType}, ${responseType} } from "./${fileName}.ts";`;
  exports.deno += `
export { ${stringExports} } from "./${fileName}.ts";`;
}

function generateOutput(target: "node" | "deno") {
  const denoImport =
    'import { EventEmitter } from "https://deno.land/std@0.153.0/node/events.ts";';

  const nodeImport = `import { EventEmitter } from "events";`;
  const output = `${target === "node" ? nodeImport : denoImport}
${target === "node" ? imports.node : imports.deno}

${Deno.readTextFileSync("./src/templates/transform-functions.ts")}

export default abstract class RPCClient extends EventEmitter {
  abstract call<ReturnType extends {} = {}>(method: string, params: unknown): Promise<ReturnType>
  ${generatedMethods}
}

${target === "node" ? exports.node : exports.deno}
`;
  return prettier.format(output, {
    parser: "typescript",
    plugins: [parserTypescript],
  });
}

Deno.writeTextFileSync(
  "./packages/base/src/generated/main.ts",
  generateOutput("node"),
);

Deno.writeTextFileSync(
  "./packages/deno/base/generated/main.ts",
  generateOutput("deno"),
);

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
