import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import config from "./webpack.dev.config.js";

const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
  filename: config.output.filename,
  contentBase: "src",
  hot: true,
  stats: {
    colors: true
  }
});

server.listen(8080, "localhost", () => {
  console.log("webpack development server is listening on http://localhost:8080");
});