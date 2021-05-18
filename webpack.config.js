const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
      index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
      },
    module: {
      rules: [
        {
              test: /\.js/,
              use: ["babel-loader"],
        },
        {
          test: /\.css$/i,
          // 1.使用style方式插入到head中
          // use: ["style-loader", "css-loader"],
          // 2.使用link方式插入到head中
          // use: [
          //   { loader: 'style-loader', options: { injectType: 'linkTag' } },
          //   { loader: 'file-loader' }
          // ]
          // 3.使用MiniCssExtractPlugin方式
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]?[hash]',
              outputPath: 'images/'
            }
          },
          // use: [
          //   {
          //     loader: 'file-loader',
          //     options: {
          //       name: '[name].[ext]?[hash]',
          //       outputPath: 'images/'
          //     }
          //   },
          // ],
        },
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
          filename: "index.html",
        }),
        new MiniCssExtractPlugin()
      ],
  }
  