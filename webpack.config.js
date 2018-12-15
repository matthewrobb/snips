const path = require('path');

module.exports = {
  entry: './mithril-mobx/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './_public/mithril-mobx')
  }
};