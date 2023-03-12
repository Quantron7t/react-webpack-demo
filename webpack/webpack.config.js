//will be used in script start command to run the webpack bundling and server
const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

//returns env specific webpack config 
module.exports = (envArgs) => {
    console.log(JSON.stringify(envArgs));
    const { env } = envArgs;
    const envSpecificWebpackConfig = require(`./webpack.${env}`);
    const mergedConfig = merge(webpackCommon, envSpecificWebpackConfig);
    return mergedConfig;
}
