const common = require('./webpack.common.config');
const webpack = require('webpack');

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
                useBuiltIns: false,
                targets: {
                  browsers: [
                    'last 2 Chrome versions'
                  ],
                },
              }],
            ],
          },
        }
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    contentBase: "src",
    hot: true,
    stats: {
      colors: true
    }
  },
  entry: [
    'react-hot-loader/patch',
    "./main.js",
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8080"
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.bundle.js',
    publicPath: '/'
  },
  optimization: {
    moduleIds: 'named'
  },
  plugins: [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ],
};