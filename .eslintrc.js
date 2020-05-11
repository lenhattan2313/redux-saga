module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-uses-vars": 2,
    quotes: [1, "double"],
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0,
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "import/no-cycle": 0,
    "react/jsx-props-no-spreading": 0,
  },
};
