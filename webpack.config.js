/**
 * Created by Zuhaib on 1/22/2017.
 */

/*var HtmlWebpackPlugin = require('html-webpack-plugin');*/
/*var webpackConfig = {
    entry: './main.js',
    output: {
        path: './dist',
        filename: 'index.js'
    },
    plugins: [new HtmlWebpackPlugin()]
};*/

var config = {
    entry: './public/main.js',

    output: {
        path:'./dist',
        filename: './dist/index.js'
    },

    devServer: {
        inline: true,
        port: 8090
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;