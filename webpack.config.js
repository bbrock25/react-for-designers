const path = require('path')
const webpack = require('webpack')

const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const server = 'http://localhost:3000'

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?${server}`,
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: `${server}/`
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [ 'babel-loader' ],
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader?modules', 'postcss-loader' ]
    }, {
      test: /\.tsx?$/,
      use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
      exclude: path.resolve(__dirname, 'node_modules'),
      include: path.resolve(__dirname, 'src')
    }, {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader'
    }]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'lessons')
    ],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css'],
  },
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  stats: 'errors-only',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react/addons': true
   },
  devServer: {
    publicPath: `${server}/`,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new TsConfigPathsPlugin({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      compiler: 'typescript'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    })
  ],
}