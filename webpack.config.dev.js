const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

const outputPath = path.join(__dirname, "/dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackCommonConfig = require("./webpack.config.common");

module.exports = merge(webpackCommonConfig, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      SERVE_PATH: "/",
      ENDPOINT: process.env.ENDPOINT,
    }),
  ],
  devtool: "eval-source-map",
  output: {
    path: outputPath,
    publicPath: "/",
    filename: "bundle.js",
    sourceMapFilename: "bundle.map",
  },
  devServer: {
    hot: true,
    open: true,
    openPage: "",
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:3000",
    }),
  },
});
