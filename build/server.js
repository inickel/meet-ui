const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config.dev');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const log = console.log;

const app = express();

const compiler = webpack(config);

log('starting');

const devMiddleware = webpackDevMiddleware(compiler, {
  contentBase: path.resolve(__dirname, '../example'),
  publicPath: config.output.publicPath,
  quiet: false
});

const hotMiddleware = webpackHotMiddleware(compiler, {
  log: () => {}
});

compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({
      action: 'reload'
    });
    cb();
  });
});

app.use(devMiddleware);
app.use(hotMiddleware);

const port = 5000;

const uri = `http://localhost:${port}`;

let _resolve;
const readyPromise = new Promise( resolve => {
  _resolve = resolve;
});

devMiddleware.waitUntilValid(() => {
  log(`listening at ${uri} \n`);
  _resolve();
});

const server = app.listen(port, (s) => {
  log('server listening');
});

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  }
};