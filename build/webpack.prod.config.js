const webpackMerge=require("webpack-merge");
const baseWebpackConfig=require("./webpack.base.config");
const  utils =require("./utils");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin} =require("clean-webpack-plugin");
//const {BundleAnalyzerPlugin} =require("webpack-bundle-analyzer");
const  OptimizeCSSAssetsPlugin =require("optimize-css-assets-webpack-plugin");
const UglifyjsPlugin =require("uglifyjs-webpack-plugin");

module.exports=webpackMerge(baseWebpackConfig,{
    mode:"production",
    performance:{
        hints:false,
       /* maxEntrypointSize:10000,
        maxAssetSize:10000,
        assetFilter:function (assetFileName) {
            return assetFileName.endsWith(".js");
        }*/
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:utils.resolve("./../dist/index.html"),
            template:"index.html",
            inject:true,
            hash:true,
            minify:{
                removeComments: true,               //去注释
                collapseWhitespace: true,           //压缩空格
                removeAttributeQuotes: true         //去除属性引用
            }
        }),
        new CleanWebpackPlugin(),
        new UglifyjsPlugin({
            parallel: true,  //使用多进程并行运行来提高构建速度
            sourceMap: false,
            uglifyOptions: {
                warnings: false,
                compress: {
                    unused: true,
                    drop_debugger: true,
                    drop_console: true,
                },
                output: {
                    comments: false // 去掉注释
                }
            }
        })
        // new BundleAnalyzerPlugin(),

    ],
    optimization:{
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    discardComments: { removeAll: true } // 移除注释
                }
            })
        ]

    }
});

