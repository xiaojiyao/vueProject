// 引入路径处理插件
var path = require("path")
// 引入处理html文件的插件
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 将webpack配置处理对象暴露
module.exports = {
  // 入口文件配置
  entry: "./src/main.js",
  // 出口文件配置
  output: {
    // 出口文件存放路径
    path: path.join(__dirname, "dist"),
    // 出口文件名
    filename: "bundle.js"
  },
  // 处理文件模块配置
  module: {
    // 处理规则
    rules: [
      {
        test: /\.css$/,     //匹配规则
        use: ['style-loader', 'css-loader']   //使用什么插件解析此类文件
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
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jsg|gif|ttf|woff)/,
        use: [
          {
            loader: 'url-loader',
            // 表示限制图片大小，单位是kb，当图片大小大于这个值时， 就将图片处理成文件路径的格式，如果图片小于这个值，就图片处理成base64格式
            options: {
              limit: 5
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  // 插件配置
  plugins: [
    // 处理html文件的插件实例
    new HtmlWebpackPlugin({
      template: './src/index.html', //要处理的html文件
      filename: 'index.html',  //处理后的文件名
      title: 'hello vue'

    })
  ]
}