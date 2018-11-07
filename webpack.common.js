/* eslint import/no-extraneous-dependencies: off */
const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  entry: [
    '@babel/polyfill',
    './src',
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    moment: 'moment',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory=true',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ISPRODUCTION: process.env.NODE_ENV === 'production',
    }),
    new CleanWebpackPlugin([
      'dist',
    ]),
  ],
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
