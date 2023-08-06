const path = require('path');
const aliases = require('./aliases');

module.exports = {
  context: path.resolve(__dirname, '..', './src'),
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'JS/[name].[hash].js',
    assetModuleFilename: './asset/[name][hash][ext]',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    alias: aliases,
  },
};
