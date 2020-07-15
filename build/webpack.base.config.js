const utils = require("./utils");
const path = require("path");
const MiniCssExtractPlugin =require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: "./src/index"
    },
    output: {
        path: utils.resolve("../dist"),
        filename: "js/[name].[hash:6].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    process.env.NODE_ENV==='production'?MiniCssExtractPlugin.loader:"style-loader",
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            },

            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "static/img/[name].[hash:7].[ext]"
                }
            },
            {
                test: /.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "static/fonts/[name].[hash:7].[ext]"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json"],
        alias: {
            "@": path.join(__dirname, "..", "src")
        }
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash:6].css",
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            /*maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name(module){
                        const packageName= module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    }
                }
            }*/
        }
    }
};
