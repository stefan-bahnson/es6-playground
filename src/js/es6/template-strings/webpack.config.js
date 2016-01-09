/**
 * ES6 bundling
 */
module.exports = {
    entry: "./template-strings",
    output: {
        path: './out',
        filename: "template-strings--transpiled.js",
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};