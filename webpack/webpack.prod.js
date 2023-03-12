const webpack = require("webpack"); 

module.exports = {
    mode : "production",
    devtool : "source-map", //for more details https://webpack.js.org/configuration/devtool/
    plugins : [
        new webpack.DefinePlugin({
            'process.env.name' : JSON.stringify('environment is now production'),// keep adding new env config as required 
        })
    ]
}