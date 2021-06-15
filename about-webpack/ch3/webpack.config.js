const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader is responsible for interpreting and converting files.
        // use: ['style-loader', 'css-loader']
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      }
    ]
  },
  // Plugin changes the webpack result itself.
  plugins: [
    new MiniCssExtractPlugin()
  ],
}