const resolve = require("@rollup/plugin-node-resolve").default;
const babel = require("@rollup/plugin-babel").default;
const commonjs = require("@rollup/plugin-commonjs").default;
const typescript = require("@rollup/plugin-typescript").default;
const dts = require("rollup-plugin-dts").default;
const pkgJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkgJson.main,
        format: "cjs",
      },
      {
        file: pkgJson.module,
        format: "esm",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({tsconfig: "./tsconfig.build.json"}),
      babel({
        exclude: "node_modules/**",
      }),
    ],
    external: [
      /node_modules/
    ]
  },
  {
    input: "dist/dts/index.d.ts",
    output: [{file: "dist/index.d.ts", format: "esm"}],
    plugins: [dts()],
  },
];
