const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (inEnv) => {
  return {
    mode: 'production',
    entry: {
      alert: './packages/alert/main',
      button: './packages/button/main'
    },
    output: {
      path: path.resolve(__dirname, 'dist/lib')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    externals: {
      react: 'react'
    }
  };
};
