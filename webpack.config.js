const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
