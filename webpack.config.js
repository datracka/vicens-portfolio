/* pending

 - manage css external dependencies (mdl)
 - manage js external dependencies
 - add jshint / eslint linting
 - create a distribution
 */

var path = require("path");
var webpack = require("webpack");
var BowerWebpackPlugin = require("bower-webpack-plugin");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

console.log(path.join(__dirname, "js"));
// webpack.config.js
module.exports = {
  //entry: './src/scripts/main.js',
  //https://webpack.github.io/docs/multiple-entry-points.html
  entry: {
    main: "./src/scripts/main.js", //main app entry point
    preloader: "./src/scripts/pre-loader.js" //preloader entry point
  },
  output: {
    //filename: './app/js/bundle.js'
    path: path.join(__dirname, "app/js"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.html$/,
        loader: ["raw-loader"]
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      proxy: "http://localhost:3100/app/" //BS act as a proxy for webpack-de-server
      //server: { baseDir: ['./app'] }
    }),
    //new BowerWebpackPlugin(), Bower deactivated - Client dependencies load externally.
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      ScrollReveal: "scrollreveal", //it is load from NPM
      PreloadJS: "preloadjs"
    })
  ],
  externals: {
    jquery: "jQuery"
  }
};
