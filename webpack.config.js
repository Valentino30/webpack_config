var path = require("path");
var HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_budle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({
      template: "app/index.html",
    }),
  ],
};
