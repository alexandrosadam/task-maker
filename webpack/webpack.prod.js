const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = (env) => {
  const basePath = env.env === "prod" ? "/prod/" : "/staging/";
  console.log(`=====================================`);
  console.log("Building started with the below config:");
  console.log(env);
  console.log(`Deploying ${env.env} environment in ${basePath}`);
  console.log(`=====================================`);

  return merge(common, {
    mode: "production",
    devtool: "hidden-source-map",
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
        new OptimizeCSSAssetsPlugin(),
      ],
    },
    output: {
      path: path.resolve("dist"),
      filename: "bundle.[fullhash].js",
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
      new HtmlWebPackPlugin({
        base: basePath,
        template: "./src/index.html",
        filename: "./index.html",
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
      new webpack.DefinePlugin({
        ENV: JSON.stringify(env.env),
      }),
    ],
  });
};
