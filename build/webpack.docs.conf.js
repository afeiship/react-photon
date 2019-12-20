const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.conf');

module.exports = (inEnv) => {
  return merge(baseConfig(inEnv), {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, '..', 'docs')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.ejs'
      })
    ]
  });
};
