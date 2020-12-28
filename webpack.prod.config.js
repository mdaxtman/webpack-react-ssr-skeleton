const common = require('./webpack.common.config');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const pathsToClean = [
  './app/dist-server',
  './app/public'
].map(p => path.join(process.cwd(), p));

module.exports = {
  ...common,
  mode: 'production',
  entry: "./index.js",
  output: {
    ...common.output,
    chunkFilename: '[name].[id].js',
    filename: 'main.js',
    globalObject: `(typeof window !== 'undefined' ? window : global)`,
    library: 'app',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'app/public'),
    publicPath: ''
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
