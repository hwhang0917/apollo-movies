const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Directories
const appPublic = path.resolve(__dirname, "public");
const appSrc = path.resolve(__dirname, "src");
const appBuild = path.resolve(__dirname, "build");
const appIndex = path.resolve(__dirname, "src", "index.js");
const appHtml = path.resolve(__dirname, "public", "index.html");

// Configurations
module.exports = (env) => {
  return {
    mode: env.production ? "production" : "development",
    entry: appIndex,
    output: {
      path: appBuild,
      filename: env.production
        ? "static/js/[name].[contenthash:8].js"
        : "static/js/bundle.js",
    },
    module: {
      rules: [
        //   Babel loader for JS/JSX/TS/TSX
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          use: "babel-loader",
          include: appSrc,
        },
        //   File Loader for images > 10KB
        {
          test: /\.(bmp|png|jpe?g|gif|ico|svg)$/i,
          loader: "file-loader",
          options: {
            outputPath: "static/media",
            name: "[name].[hash:8].[ext]",
            esModule: false,
          },
        },
        //   URL loader for images < 10KB
        {
          test: /\.(bmp|png|jpe?g|gif|ico|svg)$/i,
          loader: "url-loader",
          options: {
            limit: 10000,
            outputPath: "static/media",
            name: "[name].[hash:8].[ext]",
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: appHtml }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(
          Object.assign({}, dotenv.config().parsed, {
            NODE_ENV: env,
          })
        ),
      }),
    ],
    devtool: env.production ? false : "inline-source-map",
    devServer: {
      port: 3000,
      contentBase: appPublic,
      open: true,
      historyApiFallback: true,
      overlay: true,
    },
  };
};
