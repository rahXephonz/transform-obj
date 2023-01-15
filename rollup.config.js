import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import visualizer from "rollup-plugin-visualizer";
import { optimizeLodashImports } from "@optimize-lodash/rollup-plugin";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: ["src/main.ts"],
    output: {
      dir: "dist",
      format: "esm",
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
      optimizeLodashImports({
        useLodashEs: true,
      }),

      visualizer({
        filename: "bundle-analysis.html",
        open: process.env.ANALYZE && process.env.NODE_ENV === "development",
      }),
    ],

    preserveModules: true,
    external: ["lodash-es"],
  },
  {
    input: ["src/main.ts"],
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: "./src",
        },
      }),
    ],
  },
];
