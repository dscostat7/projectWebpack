const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: './app/src/app.html',
        filename: 'app.html',
        hash: true
    })]
};