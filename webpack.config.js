const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './assets/js/script.js', //root of the bundle
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  plugins: [new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })],
  mode: 'development'
};
