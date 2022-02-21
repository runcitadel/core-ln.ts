import { terser } from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "esm",
      },
    ],
    plugins: [
      typescript(),
      terser({
        mangle: {
          properties: {
            regex: /^_/,
          },
        },
      })
    ],
    external: ["net", "events", "path"],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/c-lightning.d.ts", format: "es" }],
    plugins: [
      dts(),
    ],
    external: ["events"],
  }
];
