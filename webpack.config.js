var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// webpack.config.js
module.exports = {
    entry: './app/scripts/main.js',
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