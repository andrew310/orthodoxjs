const path = require('path');
const express = require('express');
const webpack = require('webpack');
const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { routes } from './app/routes';

const port = process.env.PORT || 3000;
const server = express();

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
server.get('*', (req, res) => {
  // This is for material ui so that browser matches server render
  global.navigator = { userAgent: req.headers[ 'user-agent' ] }
  // Shared components between client/server
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      // ReactRouter redirect match found, redirect from server
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      // Component found for this path
      const markup = renderToString(<RouterContext {...props} />);
      // Render template and inject markup
      res.render('index', { markup })

    } else {
      res.sendStatus(404);
    }
  });
});

// We are live!
server.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('==> The magic happens on port %s!', port);
});
