const common = require('./webpack.prod.common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const pathsToClean = [
  './dist',
].map(p => path.join(process.cwd(), p));

module.exports = {
  ...common,
  entry: "./app/ReactApp.js",
  output: {
    ...common.output,
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  plugins: [
    ...common.plugins,
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: pathsToClean,
    }),
  ],
  externals: [nodeExternals()],
  target: 'node',
};
