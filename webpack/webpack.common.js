const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "web",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/, /\.ts$/, /\.tsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              name: "images/[fullhash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@components": path.resolve(__dirname, "../src/components"),
      "@views": path.resolve(__dirname, "../src/views"),
      "@constants": path.resolve(__dirname, "../src/constants"),
      "@layouts": path.resolve(__dirname, "../src/layouts"),
      "@api": path.resolve(__dirname, "../src/api"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
      "@test-utils": path.resolve(__dirname, "../src/test-utils"),
      "@stores": path.resolve(__dirname, "../src/stores"),
      types: path.resolve(__dirname, "../src/types"),
      "@images": path.resolve(__dirname, "../src/images"),
    },
  },
};
