const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtract = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/index.js',
    mode:'development',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath:"/",
        },

    devServer: {
        proxy:{
            "/api":{
                target: 'http://localhost:9993',
            }
        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader",
                }
            ]
        },
        {
            test: /\.(jpg|png|svg|gif)$/,
            use: 'file-loader'
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new miniCssExtract({
            filename: "[name].css"
        })
    ],
 

};