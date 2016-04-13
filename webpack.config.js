
var webpack = require('webpack')

module.exports = {

  entry:  {
    dev: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './entry'
    ],
    bundle: [ './entry' ]
  },

  output: {
    path: __dirname,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.css$/,
        exclude: /colors\.css$/,
        loaders: ['style', 'raw']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    hot: true,
    historyApiFallback: {
      index: '/dev'
    }
  }

}

