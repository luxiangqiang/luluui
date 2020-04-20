
const path = require("path")
const config = require("./webpack.config.base")
module.exports = {
  mode: "development", // 开发模式
  entry: "./src/js/index.js",
  output: {
    path: __dirname + "/dist/dev",
    filename: "xiaolu.min.js"
  },
  plugins: config.plugins,
  devServer: {
    host: "127.0.0.1",
    open:true,
    port:9000,
    contentBase: "./dist"
  }
}