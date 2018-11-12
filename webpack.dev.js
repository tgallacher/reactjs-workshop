/* eslint import/no-extraneous-dependencies: off */
const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
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
        },
        ],
      },
    ],
  },
});
