/**
 * ES6 bundling
 */
module.exports = {
    entry: "./destructuring",
    output: {
        path: './out',
        filename: "destructuring--transpiled.js",
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