/**
 * ES6 bundling
 */
module.exports = {
    entry: "./rest",
    output: {
        path: './out',
        filename: "rest--transpiled.js",
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