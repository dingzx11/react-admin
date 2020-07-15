const webpackMerge=require("webpack-merge");
const baseWebpackConfig=require("./webpack.base.config");
const  utils =require("./utils");
const HtmlWebpackPlugin=require("html-webpack-plugin");

module.exports= webpackMerge(baseWebpackConfig,{
   mode:"development",
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
        hot: true,
        contentBase: false, // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        compress: true, // 一切服务都启用gzip 压缩：
        port: "8080", // 指定段靠谱
        publicPath: "/", // 访问资源加前缀
        inline:true,
        stats: 'errors-only', //编译的时候命令行中输出的内容
        proxy: {
            // 接口请求代理
            "/api/":{
                target:"http://music.eleuu.com/",
                changeOrigin:true,
                pathRewrite:{
                    "^/api/":""
                }
            }
        }
    },
   plugins:[
       new HtmlWebpackPlugin({
           filename:utils.resolve("./../dist/index.html"),
           template:"index.html",
           inject:true
       })
   ]
});
