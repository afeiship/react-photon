const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.conf');

module.exports = (inEnv) => {
  return merge(baseConfig(inEnv), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      stats: 'errors-only',
      open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.ejs'
      })
    ]
  });
};
