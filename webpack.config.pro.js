
const path = require("path")
module.exports = {
  mode: "development", // 生产模式
  entry: "./src/js/index.js",
  output: {
    path: __dirname + "/dist/pro",
    filename: "xiaolu.min.js"
  },
}
