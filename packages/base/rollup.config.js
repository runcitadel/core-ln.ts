import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";

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
      commonjs(),
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
  },
];
