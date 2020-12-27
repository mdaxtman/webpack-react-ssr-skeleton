const common = require('./webpack.prod.common.config');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const pathsToClean = [
  './app/dist-server',
  './app/public'
].map(p => path.join(process.cwd(), p));

module.exports = {
  ...common,
  entry: "./index.js",
  output: {
    ...common.output,
    path: path.resolve(__dirname, 'app/public'),
  },
  plugins: [
    ...common.plugins,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: pathsToClean,
    }),
  ]
};
