const webpack = require("webpack");
const path = require('path');
const glob = require('glob');

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const aliasList = [
    "react",
    "react-dom",
    "moment",
    "redux",
    "react-redux",
    "redux-logger"
];
const resolveAlias = {};

aliasList.forEach(alias => {
    resolveAlias[alias] = path.resolve(path.resolve(__dirname, ".."), 'node_modules', alias)
});

module.exports = {
    resolve: {
        alias: resolveAlias,
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".less"],
        mainFields: ['main']
    },
    plugins: [
        //new BundleAnalyzerPlugin(),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
    ],
    module: {
        rules: [
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
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            url: false
                        },
                    },
                    /*
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },*/
                    {
                        loader: "sass-loader",
                    },
                ],
                include: path.resolve(__dirname, '../')
            },
            {
                test: /\.(png|woff2?|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader?limit=100000',
                        options: {
                            name: "fonts/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },

    // mode: "development",
    mode: 'production',

    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    enforce: true,
                },
                // Общие модули зависимостей
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true
                },
                // Общие модули
                etl: {
                    name: 'common',
                    test: /[\\/]packages[\\/]/,
                    enforce: true
                },
            }
        }
    }
};