const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:
    "./src/index.tsx",
  output: {
    path: path.resolve(
      __dirname,
      "build"
    ),
    filename:
      "[name].js",
    library:
      "webpack4app",
    libraryTarget:
      "window",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use:
          "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 3003,
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        chunks: [
          "main",
        ],
        filename:
          "index.html",
        template:
          "public/index.html",
      }
    ),
    new MiniCssPlugin(
      {
        filename:
          "styles/[name].[contenthash:8].css",
        chunkFilename:
          "styles/[name].[contenthash:8].css",
      }
    ),
  ],
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".json",
    ],
  },
};
