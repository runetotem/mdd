const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({ // TODO: Organizar templates - https://github.com/jantimon/html-webpack-plugin#generating-multiple-html-files
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'signin.html',
      template: path.resolve(__dirname, 'public', 'signin.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'signup.html',
      template: path.resolve(__dirname, 'public', 'signup.html')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }

}