// system variable
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = !DEVELOPMENT;

// path
const path = require('path');

// plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// constructor functions
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (PRODUCTION) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

const filename = (ext) =>
  DEVELOPMENT ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = (scss) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: DEVELOPMENT,
        reloadAll: true,
      },
    },
    'css-loader',
  ];

  if (scss) {
    loaders.push('resolve-url-loader', {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    });
  }

  return loaders;
};

const htmlLoaders = () => {
  const loaders = [
    {
      loader: 'html-loader',
    },
  ];

  return loaders;
};

const devServer = () => {
  const config = {
    host: 'localhost',
    port: '3000',
    historyApiFallback: true,
    hot: true,
    inline: true,
  };

  return config;
};

const plugins = () => {
  const config = [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: PRODUCTION,
      },
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ];

  if (PRODUCTION) {
    config.push(new CleanWebpackPlugin(), new BundleAnalyzerPlugin());
  }

  return config;
};

// constructor variable
const mode = DEVELOPMENT ? 'development' : 'production';

const filehash = DEVELOPMENT ? '[name].[ext]' : '[name].[hash].[ext]';

const devtool = DEVELOPMENT ? 'eval' : 'none';

// webpack settings
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode,
  // ------
  entry: {
    index: './index.js',
  },
  // ------
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: filename('js'),
  },
  // ------
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
      '.png',
      '.jpg',
      '.svg',
      '.html',
    ],
  },
  // ------
  watch: DEVELOPMENT,
  watchOptions: {
    aggregateTimeout: 100,
  },
  // ------
  devtool,
  // ------
  optimization: optimization(),
  // ------
  plugins: plugins(),
  // ------
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders(true),
      },
      {
        test: /\.html$/,
        use: htmlLoaders(),
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: filehash,
        },
      },
    ],
  },
  // ------
  devServer: devServer(),
};
