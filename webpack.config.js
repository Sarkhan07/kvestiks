const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './scss/main.scss', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, 
  },
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: [
          'style-loader',  
          'css-loader',   
          'sass-loader'    
        ],
      },
      {
        test: /\.html$/, 
        use: [
          'html-loader'    
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, 
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name][ext]', 
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', 
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
  mode: 'development',
};
