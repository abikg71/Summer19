const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'build')
  }
}

  // Dealing with babel

  module: {
    rules: [
      {
        test: /\.js$/,  // finds all js file
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  };
