const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        clean: true,
        filename: 'bundle.js'
    },
    module: {
        rules: [

            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                    sources: false
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                output: {
                    comments: false,
                },
            },
        })]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: "./index.html"
        })
    ]
}