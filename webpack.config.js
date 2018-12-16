const path = require('path');

function snip(name) {
  return {
    entry: `./src/${name}/index.js`,
    mode: 'none',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, `./public/${name}`)
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
}

module.exports = [
  snip("mithril-mobx")
];