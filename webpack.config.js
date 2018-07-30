const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function (env) {
  return ({
    mode: 'development',
    entry: './src/app.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: env === 'production' ? 'source-map' : 'cheap-eval-source-map',
    watch: true,
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true // webpack@2.x and newer
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
        {
          test: /\.(scss|css)$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader'
              }
            ],
            fallback: 'style-loader'
          })
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]
    },
    plugins: [
      new UglifyJSPlugin({sourceMap: true}),
      new ExtractTextPlugin('styles.css'),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './', 'index.html')
      }),
      new CopyWebpackPlugin([
        { from: './src/img', to: 'images' }
      ]),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        files: ['./dist/*.html', 'src/**/*.scss'],
        server: {baseDir: ['dist']}
      })
    ]
  })
}
