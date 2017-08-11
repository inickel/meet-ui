const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const px2rem = require('postcss-px2rem');
const production = process.env.NODE_ENV === 'production';

const resolve = function resolve(dir) {
  return path.resolve(__dirname, '..', dir);
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    minimize: production,
    sourceMap: production,
  }
};

function vueStyleLoader(name, options) {
  const loaders = [cssLoader];
  options = options || {};
  if (name && name !== 'css') {
    loaders.push({
      loader: `${name}-loader`,
      options: Object.assign({}, options, { sourceMap: production })
    });
  }

  if (options.extract) {
    return ExtractTextPlugin.extract({
      use: loaders,
      fallback: 'vue-style-loader'
    });
  }

  return ['vue-style-loader'].concat(loaders);
}

const vueLoaderConfig = {
  loader: 'vue-loader',
  options: {
    loaders: {
      // css: vueStyleLoader('css', { extract: true }),
      css: 'vue-style-loader!css-loader',
      postcss: vueStyleLoader('postcss', { extract: true }),
    },
    postcss: [px2rem({ remUnit: 37.5 })]
  }
};

const setting = {
  devtool: '#cheap-module-eval-source-map',
  entry: [
    './build/hotClient',
    './example/main'
  ],
  output: {
    publicPath: '/',
    path: resolve('./example/dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [vueLoaderConfig]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: resolve('./example/dist/index.html'),
      template: resolve('./index.html'),
      inject: true
    })
  ]
};

const finalConfig = merge({}, setting);

module.exports = finalConfig;