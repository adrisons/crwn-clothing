module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
      binaryLiterals: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      modules: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      octalLiterals: true,
      regexUFlag: true,
      regexYFlag: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true,
      unicodeCodePointEscapes: true,
      globalReturn: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    "no-unused-vars": "warn",
    "react/prop-types": "warn",
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
    },
  },
};
