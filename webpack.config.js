/*
  Julio Barahona M
  141206
  Sistemas y tecnologias web
  Seccion 10

*/

//imports the packages that where installed
const HtmlWebPackPlugin = require('html-webpack-plugin')
let path = require('path');
let nodeExternals = require('webpack-node-externals');

//loads babel loader
const moduleObj = {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"],
        }
    ],
};

//starts a client instance using babel
const client = {
  entry: {
    'client': './src/client/index.js'
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  module: moduleObj,
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/client/index.html'
    })
  ]
}

//starts a server instance using babel
const server = {
    entry: {
        'server': './src/server/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: moduleObj,
    externals: [nodeExternals()]
}

module.exports = [client, server];