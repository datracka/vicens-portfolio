/* pending

 - manage css external dependencies (mdl)
 - manage js external dependencies
 - add jshint / eslint linting
 - create a distribution
 */

var path = require("path");
var webpack = require("webpack");
var BowerWebpackPlugin = require("bower-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// webpack.config.js
module.exports = {
    entry: './src/scripts/main.js',
    output: {
        filename: './app/js/bundle.js'
    },
    module: {
        loaders: [
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {baseDir: ['app']}
        }),
        new BowerWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.ProvidePlugin({ //do it external. It is not doing well on the pipeline
            createjs: "preloadjs"
        })
    ]
};