const path = require('path');
const express = require('express');
const webpack = require('webpack');
const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const port = process.env.PORT || 3000;
const server = express();
import rndr from './app/render';


// Using this to inject markup from react
server.set('view engine', 'ejs');

// Detect node environment
global.__ENVIRONMENT__ = process.env.NODE_ENV || 'default';

// Otherwise errors thrown in Promise routines will be silently swallowed.
// (e.g. any error during rendering the app server-side!)
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

// Server side rendering
server.get('*', rndr);

// We are live!
server.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('==> The magic happens on port %s!', port);
});
