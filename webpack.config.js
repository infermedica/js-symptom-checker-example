/**
 * Created by Tomasz Gabrysiak @ Infermedica on 02/02/2017.
 */

const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/public'), filename: 'bundle.js'
    },
    devServer: {publicPath: '/public/', inline: true},
    resolve: {extensions: ['.js', '.json']},
    stats: {colors: true, reasons: true, chunks: false},
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }, {
            include: path.resolve(__dirname, 'src'),
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', {loader: 'css-loader', options: {url: false}}]
        }],
        loaders: [
            {
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, "src")
                ],
                test: /\.js$/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            },
          {
            test: /\.css/,
            loaders: ['style', 'css'],
            include: __dirname + '/src'
          }
        ]
    }
};
