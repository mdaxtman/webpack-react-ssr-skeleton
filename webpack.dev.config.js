const common = require('./webpack.common.config');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const HtmlWebpackHotPlugin = require('html-webpack-hot-plugin')
const webpack = require('webpack');

// const htmlHotPlugin = new HtmlWebpackHotPlugin()
module.exports = {
  ...common,
  entry: [
    "./index.js",
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8080"
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, 'src'),
  //   compress: true,
  //   hot: true,
  //   port: 3000,
  //   index: 'index.html',
  //   disableHostCheck: true,
  //   before(app, server) {
  //     htmlHotPlugin.setDevServer(server)
  //   },
  // },
  output: {
    filename: 'main.js'
  },
  optimization: {
    moduleIds: 'named'
  },
  plugins: [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   template: "index.html",
    //   inject: "body"
    // }),
    // htmlHotPlugin
  ],
};