const base = require('./webpack.config')
module.exports = Object.assign({},base, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Wron',
            template: "index.html"
        })
    ]
});