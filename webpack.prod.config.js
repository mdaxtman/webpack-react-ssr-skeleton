const common = require('./webpack.common.config');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  ...common,
  mode: 'production',
  entry: "./index.js",
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
                useBuiltIns: false,
                bugfixes: false,
                targets: {
                  esmodules: true,
                },
              }],
            ],
          },
        }
      },
    ]
  },
  output: {
    ...common.output,
    chunkFilename: '[name].[id].js',
    filename: 'main.bundle.js',
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
  ]
};
