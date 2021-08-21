const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.conf');
const mapEntries = require('@jswork/webpack-mpa-entries');
const entry = mapEntries('./packages/**/main.js', ['./packages', 'main.js']);

module.exports = (inEnv) => {
  return merge(baseConfig(inEnv), {
    mode: 'production',
    entry,
    output: {
      path: path.resolve(__dirname, '..', 'dist/lib'),
      filename: '[name]/index.js',
      library: '[name]',
      libraryTarget: 'umd'
    },
    externals: {
      classnames: 'classnames',
      react: 'react',
      'react-dom': 'react-dom',
      '@jswork/noop': '@jswork/noop',
      'object-assign': 'object-assign',
      'prop-types': 'prop-types',
      '@jswork/react-list': '@jswork/react-list'
    },
    plugins: [new CleanWebpackPlugin()]
  });
};
