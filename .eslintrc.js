/*
 *     此文件配置eslint相应规则
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-var-requires": 0, // 允许requires 引入
    "no-unused-vars": [
      "error",
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: ".*", args: "none" },
    ],
    "@typescript-eslint/no-explicit-any": "off", // any 使用

    "@typescript-eslint/no-unused-vars": [
      "error",
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: ".*", args: "none" },
    ], // 未使用变量
    "@typescript-eslint/no-this-alias": [
      // 警告this赋值给变量
      "warn",
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ["self"], // Allow `const self = this`; `[]` by default
      },
    ],
    //关闭组件命名规则
    "vue/multi-word-component-names": "off",
  },
}
