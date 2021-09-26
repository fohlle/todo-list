
const path = require('path');

module.exports = {
  mode:"development",
  devtool: 'inline-source-map',
  entry: {
    index: "./src/index.js",
    test: "./src/test.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};