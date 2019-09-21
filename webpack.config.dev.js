
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '.js','.jsx'
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY'
      },
      open: false,
      overlay: {
          warnings: true,
          errors: true
      },
      port: 8080,
      publicPath: '/',
      hot: true,
      historyApiFallback: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /public/],
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
