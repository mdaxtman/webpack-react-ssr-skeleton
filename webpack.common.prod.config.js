const common = require('./webpack.common.config');

module.exports = {
  ...common,
  mode: 'production',
  output: {
    filename: 'main.js',
    chunkFilename: '[name].[id].js'
  }
};