/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: ["eslint-config-airbnb-typescript", "next", "next/core-web-vitals", "prettier"],
  parserOptions: {
    "project": "./tsconfig.json"
  }
}
