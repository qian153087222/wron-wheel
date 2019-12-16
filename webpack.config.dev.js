const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({},base, {
    mode: 'development',
    entry:{
        example: './document/example.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Wron',
            template: "example.html"
        })
    ]
});