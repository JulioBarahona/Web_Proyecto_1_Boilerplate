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
  //to enable hot reloading when testing and developing new things and see changes quicker
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  //where the development will be done and the port it will work
  devServer: {
    port:8080,
    contentBase: './output',
  }
};
