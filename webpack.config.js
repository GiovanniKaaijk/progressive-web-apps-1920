// Combined 'require' statements
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const frontConfig = {
  // Stuff the entire webpack-front.config.js
  // without the require and module.exports lines
  mode: 'development',
  entry: './public/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map'
}
const backConfig = {
  // Stuff the entire webpack-back.config.js
  // without the require and module.exports lines
  mode: 'development',
  target: "node",
  entry: {
    app: ["./server.js"]
  },
  output: {
    path: path.resolve(__dirname, "./server-build"),
    filename: "bundle-back.js"
  },
  externals: [nodeExternals()],
}
// Combined 'module.exports'
module.exports = [ frontConfig, backConfig ];