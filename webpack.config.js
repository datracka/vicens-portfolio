var path = require("path");
var webpack = require("webpack");
var BowerWebpackPlugin = require("bower-webpack-plugin");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

// webpack.config.js
module.exports = {
  mode: "production",
  entry: {
    main: "./src/scripts/main.js"
  },
  output: {
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
      proxy: "http://localhost:3100/app/"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      ScrollReveal: "scrollreveal", // it is loaded from NPM
      PreloadJS: "preloadjs"
    })
  ],
  externals: {
    jquery: "jQuery"
  }
};
