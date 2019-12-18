const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    externals: {
      React: 'react'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.ejs'
      })
    ],
    devServer: {
      stats: 'errors-only',
      open: true
    }
  };
};
