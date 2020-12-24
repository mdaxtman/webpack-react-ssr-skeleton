const common = require('./webpack.common.prod.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  ...common,
  entry: "./app/ReactApp.js",
  output: {
    ...common.output,
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  target: 'node',
};
