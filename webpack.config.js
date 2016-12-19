'use strict';

const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development',
  isDevelopment = NODE_ENV === 'development';

module.exports = {
  entry: './home',
  output: {
    filename: 'build.js',
    library: 'home'
  },

  devtool: isDevelopment ? 'inline-source-map' : 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],

  resolve: {
    modulesDirectories: [],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets=es2015'
    }]
  }
};