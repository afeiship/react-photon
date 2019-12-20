const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = (inEnv) => {
  return {
    mode: 'development',
    entry: './public/index.js',
    stats: 'errors-only',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-hot-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(woff|eot|ttf)\??.*$/,
          use: ['url-loader']
        }
      ]
    },
    plugins: [new ProgressBarPlugin()]
  };
};
