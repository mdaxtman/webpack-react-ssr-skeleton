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
  module: {
    ...common.module,
    rules: [
      ...common.module.rules,
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/env', {
                modules: false,
                useBuiltIns: 'usage',
                corejs: { version: 3, proposals: false},
                targets: {
                  esmodules: false
                },
              }],
            ],
          },
        }
      },
    ]
  },
  mode: 'production',
  entry: "./es5.js",
  output: {
    ...common.output,
    chunkFilename: '[name].[id].js',
    filename: 'nomodule.bundle.js',
    globalObject: `(typeof window !== 'undefined' ? window : global)`,
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
