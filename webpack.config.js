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
    devServer: {publichPath: '/public/'},
    resolve: {extensions: ['.js', '.json']},
    stats: {colors: true, reasons: true, chunks: false},
    module: {
        rules: [
            {
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

                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, "src")
                ],

                // Only run `.js` and `.jsx` files through Babel
                test: /\.js$/,

                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            }
        ]
    }
};
/*

module.exports = {
    context: __dirname,
    entry: './src/Demo1/ClientApp.js',
    devtool: 'source-map',
    output: {path: path.join(__dirname, '/public'), filename: 'bundle.js'},
    devServer: {publichPath: '/public/'},
    resolve: {extensions: ['.js', '.json']},
    stats: {colors: true, reasons: true, chunks: false},
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }, {include: path.resolve(__dirname, 'src'), test: /\.js$/, loader: 'babel-loader'}, {
            test: /\.css$/,
            use: ['style-loader', {loader: 'css-loader', options: {url: false}}]
        }]
    }
} */
