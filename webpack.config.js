const path = require('path');

module.exports = {
    entry: [
            'webpack-dev-server/client?http://' + require("os").hostname() + ':4200/',
            'webpack/hot/only-dev-server',
            './src/main.ts'
    ],
    output: {
              filename: 'app.js',
              path: path.resolve(__dirname, 'dist')
            },
    resolve: {
            extensions: ['.ts', '.js']
      },
     // Source maps support ('inline-source-map' also works)
      devtool: 'source-map',
       // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}