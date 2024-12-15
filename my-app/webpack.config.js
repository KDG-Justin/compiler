const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'development',
    entry: './src/input.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    resolve: {
        fallback: {
            assert: false,
            path: false,
            util: false
        },
        extensions: ['.js', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {loader: 'css-loader'}]
            },
            {
                test: /\.tsx$/,
                use: 'my-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/index.html'
        })
    ],
    devServer: {
        open: true,
        port: 9000
    }
}
