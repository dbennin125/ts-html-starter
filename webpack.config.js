const path = require('path');
// const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const webpack = require('webpack');

// const CopyPlugin = require('copy-webpack-plugin');
// const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.ts',
    // devtool: 'source-map',
    plugins: [
        // new DeclarationBundlerPlugin({
        //     moduleName: './src/index.ts',
        //     out:'./dist/bundle.d.ts',
        // }),
        // new HtmlPlugin({ 
        //     hash: true,
        //     template: path.resolve(__dirname + '/src/index.html') 
        // }),
        new CleanWebpackPlugin(),
        new Dotenv({
            systemvars: true
        }),
        // new CopyPlugin({
        //     patterns: [
        //         { from: 'src' },
        //     ]
        // })
    ],

    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader:  'ts-loader',
            },
            {
                test: /\.(jpeg|jpg|png|svg|)$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 1000 },
                },
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname + '/dist'),
        publicPath: '/dist/'
    },
};
