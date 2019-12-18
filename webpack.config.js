const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (inEnv) => {
  return {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'react-photon.js'
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
      classnames: 'classnames',
      react: 'react'
    },
    plugins: [new CleanWebpackPlugin()]
  };
};
