module.exports = {
    publicPath: './',
    rules: [
      {
        test: /\.mp3$/,
        loader: 'url-loader'
      }
    ]
  }