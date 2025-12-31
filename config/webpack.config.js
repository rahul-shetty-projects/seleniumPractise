module.exports = {
    entry: "./src/index.js",
    output: {
        path:__dirname+ '/dist/',
        filename: "greenkart.bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module: {
        loaders: [
            {
                // test: /\.jsx?$/,
                test: /\.js$|jsx/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    mode: 'development'

};