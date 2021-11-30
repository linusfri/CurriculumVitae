const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/js/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][ext]"
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
};
