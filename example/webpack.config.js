const path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  entry: './main.tsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: ['babel-loader', 'ts-loader'] }
    ]
  }
}
