const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css 样式抽离插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除旧的打包文件插件
module.exports = {
  module: {
    rules: [
      //-> 高级语法转换
      {
        test: /\.js$/,
        exclude: /node_modules/, // 指定搜索目录
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], //  ES6 转化模块
            plugins: ["@babel/plugin-proposal-class-properties"] // ES7 转 ES5
          }
        }
      },
      //-> CSS 样式处理
      {
        test: /\.css$/,
        use: [
          // 从后向前加载
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      //-> less 样式处理
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      //-> 语法规范检查
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")], // 指定搜索目录
        use: {
          loader: "eslint-loader", // js 语法验证
          options: {
            formatter: require("eslint-friendly-formatter"), // 指定错误报告的格式规范
            enforce: "pre" // 强制首先加载
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/html/demo.html",
      minify: {
        removeAttributeQuotes: true, // 删除双引号
        collapseWhitespace: true // 将其折叠为一行
      }
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"]
    }),
    new MiniCssExtractPlugin({
      filename: "./css/xiaolu.min.css" // 抽离出来文件名称
    })
  ]
};
