module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "jest": true
  },
  "extends":[ "eslint:recommended","plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "jest"
  ],
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "windows"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "never"
      ],
      'no-console': 'off'
  }
};