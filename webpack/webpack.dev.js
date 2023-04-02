const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[fullhash].css" }),
    new HtmlWebpackPlugin({
      base: "/",
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify("dev"),
    }),
    new BundleAnalyzerPlugin(),
  ],
});
