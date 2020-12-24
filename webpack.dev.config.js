const common = require('./webpack.common.config');
const webpack = require('webpack');

module.exports = {
  ...common,
  entry: [
    'react-hot-loader/patch',
    "./index.js",
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8080"
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js'
  },
  optimization: {
    moduleIds: 'named'
  },
  plugins: [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ],
};