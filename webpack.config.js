const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'html-loader',
            options: {
                minimize: false,
                sources: false
            }
        }, ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: "./index.html"
        })
    ],
    output: {
        clean: true,
    }

}