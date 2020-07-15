const path =require("path");
const HtmlWebpackPlugin =require("html-webpack-plugin");

function resolve(dir) {
    return path.resolve(__dirname,dir);
}

const HtmlWebpackPlugins=new HtmlWebpackPlugin({
    filename:resolve("./../dist/index.html"),
    template:"index.html",
    inject:true,
    hash:true,
    minify:{
        removeComments:true,
        collapseWhitespace:true,
        removeAttributeQuotes:true
    }
});


module.exports={
    mode:"development",
    entry:{
        app:"./src/index"
    },
    output:{
        path:resolve("../dist"),
        filename:"js/[name].[hash].js",
        publicPath:"/"
    },
    module:{

    },
    plugins:[
        HtmlWebpackPlugins
    ],
    devServer:{

    }
};
