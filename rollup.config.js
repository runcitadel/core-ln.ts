import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import ts from "rollup-plugin-ts";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
    },
  ],
  plugins: [ts(), nodeResolve(), terser()],
  external: ["undici"],
};
