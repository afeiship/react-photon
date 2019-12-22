const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.conf');
const OfflinePlugin = require('offline-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = (inEnv) => {
  return merge(baseConfig(inEnv), {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, '..', 'docs'),
      filename: '[name].[hash:6].js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production'
      }),
      new CopyWebpackPlugin([
        { from: './public/assets/fallback.js', to: './fallback.js' }
      ]),
      new HtmlWebpackPlugin({
        template: './public/index.ejs'
      }),
      new OfflinePlugin({
        excludes: ['fallback.js'],
        ServiceWorker: {
          events: true
        }
      })
    ]
  });
};
