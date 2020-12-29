const webpack = require("webpack");
const webpackDevServer =  require("webpack-dev-server");
const config = require("./webpack.dev.config.js");

const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
  filename: config.output.filename,
  ...config.devServer
});

server.listen(8080, "localhost", () => {
  console.log("webpack development server is listening on http://localhost:8080");
});