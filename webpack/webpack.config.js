const base = require('./base.webpack.config');
const helper = require("./webpack.helper");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

let config = {
    entry: {
        ...helper.getModules('./src/index.tsx',
            (name) => name != null)
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            //filename: 'krista-bundles/package/dist/@krista/etl/[name].css',
            filename: '[name].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new CopyPlugin({
            patterns: [
                { from: './public', to: './' }
            ]
        })
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(path.resolve(__dirname, ".."), './build'),

        library: '[name]',
        libraryTarget: 'umd',
        globalObject: `(typeof self !== 'undefined' ? self : this)`
    }
};

module.exports = Object.assign({}, base, config);