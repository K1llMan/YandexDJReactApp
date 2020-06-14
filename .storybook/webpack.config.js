const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = async ({ config, mode }) => {
    config.plugins.push(new webpack.ProvidePlugin({
        "regeneratorRuntime": "regenerator-runtime/runtime",
    }));

    config.module.rules = [];

    config.resolve.extensions = [".ts", ".tsx", ".js", ".jsx", ".css", ".less", ".json", ".woff", ".woff2", ".eot", ".ttf"];

    config.module.rules = [
        {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: [/node_modules/],
            use: [
                "babel-loader"
            ],
        },
        {
            test: /\.(less)$/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                    options: {
                        url: false,
                    },
                },
                {
                    loader: "less-loader",
                },
            ],
        },
        {
            test: /\.(s?css)$/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        url: false
                    },
                },              
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                },
            ],
            include: path.resolve(__dirname, '../')
        },
        {
            test: /\.(woff|woff2|eot|ttf)$/,
            use: [
                {
                    loader: 'url-loader?limit=100000',
                    options: {
                        include: path.resolve(__dirname, '../')
                        //name: "fonts/[name].[ext]"
                    }
                }
            ]

            //loader: 'url-loader?limit=100000'
        }];

    return config;
};