/* eslint import/no-extraneous-dependencies: off */
const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'eslint-loader',
          options: {
            configFile: '.eslintrc.js',
            emitWarning: true,
            failOnError: false,
          },
        }],
      },
    ],
  },
  plugins: [],
  optimization: {
    usedExports: true,
    providedExports: true,
  },
  stats: {
    colors: true,
    modulesSort: '!size',
  },
});
