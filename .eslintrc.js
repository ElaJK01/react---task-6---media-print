module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/no-unstable-nested-components": [1, { allowAsProps: true }],
    "react/function-component-definition": "off",
    "react/prop-types": "off",
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "consistent-return": 0,
    "no-unused-expressions": 0,
  },
  parser: "@babel/eslint-parser",
  ignorePatterns: ["graphql.tsx"],
};
