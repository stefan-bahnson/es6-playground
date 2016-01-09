/**
 * ES6 bundling
 */
module.exports = {
    entry: "./let-and-const",
    output: {
        path: './out',
        filename: "let-and-const--transpiled.js",
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