/**
 * ES6 bundling
 */
module.exports = {
    entry: "./default-arg",
    output: {
        path: './out',
        filename: "default-arg--transpiled.js",
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