const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'production',
    entry: {
        index: './lib/index.tsx'
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'Wron',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Wron',
            template:"index.html"
        })
    ]
};