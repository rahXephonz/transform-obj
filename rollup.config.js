import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import { optimizeLodashImports } from "@optimize-lodash/rollup-plugin";
import { terser } from "rollup-plugin-terser";

const lodashPackage = [
  "lodash/transform.js",
  "lodash/isArray.js",
  "lodash/camelCase.js",
  "lodash/isObject.js",
  "lodash/kebabCase.js",
  "lodash/snakeCase.js",
  "lodash/upperCase.js",
];

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
    external: ["lodash", ...lodashPackage],
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
