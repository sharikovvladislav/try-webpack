'use strict';

const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development',
  isDevelopment = NODE_ENV === 'development';

module.exports = {
  context: __dirname + '/src',
  entry: {
    home: './home',
    about: './about',
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    library: '[name]'
  },



  devtool: isDevelopment ? 'inline-source-map' : 'source-map',

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })/*,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    })*/
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