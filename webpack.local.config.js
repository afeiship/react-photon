const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (inEnv) => {
  return {
    mode: 'development',
    entry: './public/index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(woff|eot|ttf)\??.*$/,
          use: ['url-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.ejs'
      })
    ],
    devtool:'source-map',
    devServer: {
      stats: 'errors-only',
      open: true
    }
  };
};
