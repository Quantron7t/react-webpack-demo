const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve : {
    extensions : ['.tsx','.ts','.js']
  },
  module : {
    rules : [
        { 
            //declaring rule for js/ts/tsx/jsx files -> dev dependencies installed : babel-loader 
            test : /\.(ts|js)x?$/,
            exclude : /node_modules/,
            use : ['babel-loader']
        },
        { 
            //declaring rule for css files -> dev dependencies installed : style-loader and css-loader  
            test : /\.(css)$/,
            exclude : /node_modules/,
            use : [ 'style-loader', 'css-loader']
        },
        {   //declaring for adding static resources in components and add assets extensions under declaration.d.js
            test : /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type : 'asset/resource'
        }
    ]
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../build'), //can be also named as ../dist
  },
  plugins : [
    new HtmlWebpackPlugin({
        template : path.resolve(__dirname,'../src/index.html')
    })
  ],
  performance: { 
    //https://stackoverflow.com/questions/49348365/webpack-4-size-exceeds-the-recommended-limit-244-kib
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};