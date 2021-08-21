const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.conf');

module.exports = (inEnv) => {
  return merge(baseConfig(inEnv), {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'react-photon.js',
      library: 'ReactPhoton',
      libraryTarget: 'umd'
    },
    externals: {
      classnames: 'classnames',
      react: 'react',
      'react-is':'react-is',
      'react-dom': 'react-dom',
      '@jswork/noop': '@jswork/noop',
      'object-assign': 'object-assign',
      'prop-types': 'prop-types',
      '@jswork/react-list': '@jswork/react-list'
    },
    plugins: [new CleanWebpackPlugin()]
  });
};
