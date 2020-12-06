/* eslint-disable import/no-extraneous-dependencies */
import path from "path"
import { CheckerPlugin } from "awesome-typescript-loader"
import HtmlWebpackPlugin from "html-webpack-plugin"

import merge from "webpack-merge"
import webpack from "webpack"

const commonConfig = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  context: path.resolve(__dirname, "./src"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({ template: "index.html.ejs" }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
}

const developmentConfig = merge(commonConfig, {
  mode: "development",
  entry: [
    "react-hot-loader/patch", // activate HMR for React
    "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.tsx", // the entry point of our app
  ],
  //   devServer: {
  //     hot: true, // enable HMR on the server
  //   },
  //   devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  ],
})

module.exports = developmentConfig
