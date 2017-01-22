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