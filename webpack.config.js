/* pending

    - manage css external dependencies (mdl)
    - manage js external dependencies
    - add jshint / eslint linting
    - create a distribution
 */

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// webpack.config.js
module.exports = {
    entry: './src/scripts/main.js',
    output: {
        filename: './app/js/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {baseDir: ['app']}
        })
    ]
};