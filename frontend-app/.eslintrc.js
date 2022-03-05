module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  plugins: ["react"],
  parserOptions: {
    version: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended", "prettier"],
  rules: {
    "prettier/prettier": "error",
    semi: ["error", "never"],
  },
}
