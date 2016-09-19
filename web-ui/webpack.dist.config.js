const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const PATHS = {
  src: path.resolve(__dirname, 'client'),
  build: path.resolve(__dirname, 'dist')
};

module.exports = {
  env: process.env.NODE_ENV,
  entry: {
    app: path.resolve(PATHS.src, 'app.jsx'),
    vendor: ['rxjs', 'react', 'react-dom']
  },

  output: {
    filename: '[name].js',
    path: path.join(PATHS.build, 'assets'),
    publicPath: '/assets/'
  },

  debug: false,
  devtool: 'source-map',

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {}
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      include: PATHS.src,
      loader: 'babel'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|woff|woff2|ttf|svg|eot|gif)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      {from: 'client/index.html', to: '..'},
      {from: 'nginx.conf.prod', to: '..'},
      {context: 'client/assets', from: '**/*', to: '../assets'}
    ])
  ]

};
