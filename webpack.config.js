const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');


module.exports = {
    // 入口文件
    entry: {
        app: './src/index.js'
    },
    // 输出到dist文件夹, 文件名字为bundle.js
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader','less-loader','postcss-loader'],
                })
            },
            
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename: "[name].css"
        }),
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss:[autoprefixer({ browsers: ['last 3 versions'] })]
            }
        })
    ],
    devServer: {
        port: 3000,
        contentBase: './dist'
    }
}