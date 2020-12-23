const common = require('./webpack.common.config');
const path = require('path');

module.exports = {
  ...common,
  context: path.join(__dirname, "src"),
  entry: "./index.js",
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
};
