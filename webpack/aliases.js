const path = require('path');

/* DO NOT FORGET: to add aliases to .tsconfig file for compatibility */

module.exports = {
  '@': path.resolve(__dirname, '..', 'src'),
  '@style': path.join(__dirname, '..', 'src/', 'style'),
  '@assets': path.join(__dirname, '..', 'src/', 'assets'),
  '@router': path.join(__dirname, '..', 'src/', 'router'),
  '@components': path.join(__dirname, '..', 'src/', 'components'),
  '@constants': path.join(__dirname, '..', 'src/', 'constants'),
  '@hooks': path.join(__dirname, '..', 'src/', 'hooks'),
  '@helpers': path.join(__dirname, '..', 'src/', 'helpers'),
  '@api': path.join(__dirname, '..', 'src/', 'api'),
  '@pages': path.join(__dirname, '..', 'src/', 'pages'),
  '@redux': path.join(__dirname, '..', 'src/', 'redux'),
  '@types': path.join(__dirname, '..', 'src/', 'types'),
};
