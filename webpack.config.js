const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8888,
  }
}