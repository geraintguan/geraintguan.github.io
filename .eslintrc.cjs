/* eslint-env node */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require("path");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,

  env: {
    es2020: true,
    node: true,
  },

  extends: ["eslint:recommended", "plugin:prettier/recommended"],

  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],

      extends: [
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],

      parser: "@typescript-eslint/parser",

      parserOptions: {
        ecmaVersion: "latest",
        project: join(__dirname, "tsconfig.json"),
        sourceType: "module",
      },

      rules: {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      },

      overrides: [
        {
          files: ["**/*.tsx"],

          env: {
            browser: true,
            node: false,
          },

          extends: [
            "plugin:react/all",
            "plugin:react/jsx-runtime",
            "plugin:react-hooks/recommended",
            "plugin:tailwindcss/recommended",
          ],

          settings: {
            react: {
              version: "detect",
            },
          },

          rules: {
            "react/jsx-filename-extension": [
              "error",
              { extensions: [".jsx", ".tsx"] },
            ],

            "react/jsx-max-depth": ["error", { max: 5 }],

            "react/forbid-component-props": ["off"],
            "react/jsx-indent": ["off"],
            "react/jsx-indent-props": ["off"],
            "react/jsx-newline": ["off"],
            "react/jsx-no-bind": ["off"],
            "react/jsx-no-literals": ["off"],
            "react/jsx-props-no-spreading": ["off"],
            "react/jsx-max-props-per-line": ["off"],
            "react/jsx-one-expression-per-line": ["off"],

            "react/require-default-props": [
              "error",
              { functions: "defaultArguments" },
            ],
          },
        },
      ],
    },
  ],
};
