const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: { import: "./src/app.js", dependOn: "shared" },
    shared: ["axios"],
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name]-[fullhash].chunk.js",
    assetModuleFilename: "images/[name]-[hash][ext][query]",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpe?g)/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
