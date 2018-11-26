const webpack = require('webpack');
module.exports = {
  //where the main file will be liocated
  entry: './input/index.js', 
  //where the output will be compiled and rendered
  output: {
    path: __dirname + '/output',
    publicPath: '/',
    filename: 'main.js'
  },
  devServer: {
    port:8080,
    contentBase: './dist',
  }
};
