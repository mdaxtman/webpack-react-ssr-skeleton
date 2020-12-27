const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isServerBundle = process.env.NODE_ENV === 'server' ? true : false;

module.exports = {
  context: path.join(__dirname, "src"),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
          }},
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["postcss-preset-env"],
                  ["autoprefixer"],
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|png|jpg|gif)$/,
        use: [`url-loader?name=images/[name].[ext]&limit=10000${isServerBundle ? '&emitFile=false' : ''}`],
        exclude: /node_modules/
      },
      {
        test: /.svg$/,
        use: [
          "raw-loader",
          "image-webpack-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
  },
  plugins: [new MiniCssExtractPlugin()],
};
