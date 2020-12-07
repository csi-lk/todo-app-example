module.exports = {
  plugins: [
    "import",
    "json",
    "unicorn",
    "sort-imports-es6-autofix",
    "jest-dom",
  ],
  extends: [
    "airbnb-base",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/unicorn",
  ],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "@typescript-eslint/no-explicit-any": 2,
        "@typescript-eslint/explicit-function-return-type": 2,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "unicorn/filename-case": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
      ],
    },
  ],
}
