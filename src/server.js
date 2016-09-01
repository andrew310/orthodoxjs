const path = require('path');
const express = require('express');
const webpack = require('webpack');
const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const port = process.env.PORT || 3000;
const server = express();
const cookieParser = require('cookie-parser');
const cookie = require('react-cookie');
import rndr from './app/render';


// quick way to inject our markup
server.set('view engine', 'ejs');

// detect node environment
global.__ENVIRONMENT__ = process.env.NODE_ENV || 'default';

// log errors with promise routines
process.on('unhandledRejection', (reason, p) => {
  if (reason.stack) {
    console.error(reason.stack);
  } else {
    console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
  }
});

// Intercept favicon requests
server.get('/favicon.ico', function(req, res) {
  res.writeHead(200, { 'Content-Type': 'image/x-icon' });
  res.end();
});

// Use hot loading middleware
if (!process.env.NODE_ENV) {
  const compiler = webpack(config);

  server.use(dev(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));
  server.use(hot(compiler));
}

// Serve css file
server.use(express.static(path.resolve('./src/www/')));

server.use(cookieParser());

// Server side rendering
server.get('*', (req, res, next) => {cookie.plugToRequest(req, res); next();}, rndr);

// We are live!
server.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('==> The magic happens on port %s!', port);
});
