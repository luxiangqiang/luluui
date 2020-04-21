module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module"
  },
  env: {
    browser: true
  },
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    /* 2空格缩进 */
    indent: ["error", 2, { VariableDeclarator: "first" }],
    /* 要求尽可能使用单引号 */
    quotes: ["error", "single"],
    /* 在语句结尾处需要分号 */
    semi: ["error", "always"],
    /* 禁止稀松数组，例：[1,,2] */
    "no-sparse-arrays": 1,
    /* 禁用eval */
    "no-eval": 1,
    /* 禁止出现未使用过的变量 */
    "no-unused-vars": [1, { vars: "all", args: "none" }],
    /* 禁止 function 定义中出现重名参数 */
    "no-dupe-args": 1,
    /* 禁止对象字面量中出现重复的 key */
    "no-dupe-keys": 1,
    /* 禁止出现空的语句块 */
    "no-empty": 1,
    /* 禁止不必要的Boolean转换 */
    "no-extra-boolean-cast": 1,
    /* 禁止不必要的括号 */
    "no-extra-parens": 1,
    /* 禁止在字符串和注释之外不规则的空白 */
    "no-irregular-whitespace": 1,
    /* 强制使用有效的 JSDoc 注释 */
    "valid-jsdoc": 1,
    /* 禁用with */
    "no-with": 1,
    /* 要求 IIFE 使用括号括起来 */
    "wrap-iife": [1, "inside"]
  }
};
