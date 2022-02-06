import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-ts";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
    },
  ],
  plugins: [ts(), terser({
    mangle: {
      properties: {
        regex: /^_/,
      },
    },
  })],
  external: ["net"],
};
