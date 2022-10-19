import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import { optimizeLodashImports } from "@optimize-lodash/rollup-plugin";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: ["src/main.ts"],
    output: {
      dir: "dist",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser({
        compress: true,
        module: true,
        toplevel: false,
      }),
      optimizeLodashImports(),
    ],

    preserveModules: true,
    external: [],
  },
  {
    input: ["src/main.ts"],
    output: [{ file: "dist/index.d.ts", format: "cjs" }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: "./src",
        },
      }),
    ],
  },
];
