//npx webpack 
var webpack = require("webpack")
var path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map'

  },
  devtool: '#source-map',

  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
              presets: ['env', 'stage-0', 'react']
          }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    }),
    /*
    new webpack.optimization.minimize({
      sourceMap: true,
      warnings: false,
      mangle: true
    })
    */
/*
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        warnings: false,
        mangle: true
    })
    */

  ]
}
