const path = require('path');
const px2rem = require('postcss-px2rem');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
      css: vueStyleLoader('css', { extract: true }),
      postcss: vueStyleLoader('postcss', { extract: true }),
    },
    postcss: [px2rem({ remUnit: 37.5 })]
  }
};

const context = resolve('src');

const config = {
  // context: context,
  entry: './index.js',
  output: {
    publicPath: '/',
    path: resolve('./dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      vue$: 'vue/dist/vue.esm.js',
      '@': context
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [vueLoaderConfig]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ]
};

module.exports = config;