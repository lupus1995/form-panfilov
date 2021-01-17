const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:8080/',
    // 'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.tsx'),
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          configFile: `${__dirname}/.eslintrc.js`,
          fix: true,
          quiet: true,
          cache: true,
        },
        // exclude: /(node_modules)/,
      },

      { parser: { requireEnsure: false } },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
          {
            loader: 'ts-loader', options: {
              transpileOnly: true,
              happyPackMode: true
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            // creates style nodes from JS strings
            loader: 'style-loader',
          },
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: path.resolve(__dirname, 'src'),
          //   },
          // },
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
          },
          {
            // compiles Sass to CSS
            loader: 'sass-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                // eslint-disable-next-line global-require
                require('autoprefixer'),
              ],
            },
          },
        ],
      },
      // {
      //   test: /\.less$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'less-loader'],
      //   }),
      // },
      {
        test: /\.css$/,
        use: [
          {
            // creates style nodes from JS strings
            loader: 'style-loader',
          },
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.html'], modules: ['node_modules'] },
  output: {
    path: `${__dirname}/public`,
    // filename: 'app.js',
    publicPath: '/hmr/',
    chunkFilename: '[name].js',
  },
  // devtool: 'source-map',
  optimization: {
    runtimeChunk: {
      name: 'app',
    },
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
  },
  // resolve: {
  //   alias: {
  //     react: path.resolve('./node_modules/react'),
  //     'react-dom': path.resolve('./node_modules/react-dom')
  //   },
  // },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'src'),
    watchContentBase: true,
    disableHostCheck: true,
    host: '127.0.0.1',
    port: 4000,
    publicPath: '/hmr/',
    filename: 'app.js',
    inline: true,
    hot: true,
    // hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
      async: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/, /node_modules$/),
    // new ExtractTextPlugin('style.css'),
  ],
};
