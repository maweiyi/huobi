const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'public'),
    entry: {
        test: './js/test.js'
    },
    output: {
        path: path.join(__dirname, 'public/js-built'),
        filename: '[name].js'
    },

    module: {
        rules: [
            //'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }

}