const common = require('./webpack.common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  ...common,
  context: path.join(__dirname, "src"),
  entry: "./app.js",
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // library: 'app',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  target: 'node',
};
