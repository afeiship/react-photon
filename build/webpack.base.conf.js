const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = (inEnv) => {
  return {
    mode: 'development',
    entry: './public/index.js',
    stats: 'errors-only',
    resolve: {
      alias: {
        root: resolve(__dirname, '..'),
        '@': resolve(__dirname, '..', 'src'),
        packages: resolve(__dirname, '..', 'packages')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.snippet$/,
          exclude: /node_modules/,
          use: ['raw-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-hot-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.(woff|eot|ttf)\??.*$/,
          use: ['url-loader']
        }
      ]
    },
    plugins: [
      new ProgressBarPlugin(),
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        ReactHighlight: '@jswork/react-highlight'
      })
    ]
  };
};
