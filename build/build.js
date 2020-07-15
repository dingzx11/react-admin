process.env.NODE_ENV="production";
const webpack =require("webpack");
const ora =require("ora");
const chalk =require("chalk");
const webpackConfig=require("./webpack.prod.config");
const spinner=ora("build...");
spinner.start();
webpack(
    webpackConfig,function (err,stats) {
        spinner.stop();
        if(err)throw err;
        process.stdout.write(stats.toString({
            colors:true,
            modules:false,
            children:false,
            chunks:false,
            chunkModules:false
        })+"\n\n");

        console.log(chalk.cyan("Build complete. \n"));
        console.log(chalk.yellow("打包完成. \n"));

        process.exit();
    }
);
