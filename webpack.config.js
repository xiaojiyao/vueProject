var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          }
        ]
      },
      {
        test:/\.scss$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader'
          },
          {
            loader:'sass-loader'
          }
        ]
      },
      {
        test:/\.(png|jsg|gif)/,
        use:[
          {
            loader:'url-loader',
            // 表示限制图片大小，单位是kb，当图片大小大于这个值时， 就将图片处理成文件路径的格式，如果图片小于这个值，就图片处理成base64格式
            options:{
              limit:5
            }
          }
        ]
      },
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        use:{
          loader: "babel-loader",
        }
      },
      {
        test:/\.vue$/,
        loader:"vue-loader"
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./src/index.html',
      title:'hello vue'
    })
  ]
}