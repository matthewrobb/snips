const path = require('path');

module.exports = {
  entry: './mithril-mobx/index.js',
  mode: 'none',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './_public/mithril-mobx')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader']
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};