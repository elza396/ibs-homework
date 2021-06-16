const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        product: './src/product.js',
        search: './src/search.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['index', 'search'],
        }),
        new HtmlWebpackPlugin({
            template: './src/product.html',
            filename: 'product.html',
            chunks: ['product'],
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
