const merge = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "./dist",
    hot: true,
    open: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    proxy: {
      "api/": "http://localhost:5000",
    },
    onListening: (server) => {
      const port = server.listeningApp.address().port;
      console.log(`webpack-dev-server succesfully started on http://localhost:${port}`);
    },
  },
});
