// @ts-check
import js from "@eslint/js";
import astroParser from "astro-eslint-parser";
import astro from "eslint-plugin-astro";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier/recommended";
import ts from "typescript-eslint";

export default ts.config(
  js.configs.recommended,
  perfectionist.configs["recommended-natural"],
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  ...astro.configs["jsx-a11y-strict"],
  {
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        extraFileExtensions: [".astro"],
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  prettier,
);
