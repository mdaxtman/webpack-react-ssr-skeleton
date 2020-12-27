const common = require('./webpack.prod.common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const pathsToClean = [
  './app/dist',
].map(p => path.join(process.cwd(), p));

module.exports = {
  ...common,
  entry: "./app/ReactApp.js",
  output: {
    ...common.output,
    path: path.resolve(__dirname, 'app/dist'),
    libraryTarget: 'umd',
    library: 'app',
    globalObject: `(typeof window !== 'undefined' ? window : global)`
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
