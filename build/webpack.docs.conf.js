const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.conf');
const OfflinePlugin = require('offline-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (inEnv) => {
  return merge(baseConfig(inEnv), {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, '..', 'docs'),
      filename: '[name].[hash:6].js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.ejs'
      }),
      new OfflinePlugin()
    ]
  });
};
