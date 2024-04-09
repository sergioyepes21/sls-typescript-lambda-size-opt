const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

const isLocal = slsw.lib.webpack.isLocal;

const exportMode = isLocal ? "development" : "production";

const exportExternals = isLocal ? [] : [nodeExternals()];

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  mode: exportMode,
  externals: exportExternals,
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      }
    ]
  }
};
