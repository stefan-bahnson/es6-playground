/**
 * ES6 bundling
 */
module.exports = {
    entry: "./arrow-functions",
    output: {
        path: './out',
        filename: "arrow-functions--transpiled.js",
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