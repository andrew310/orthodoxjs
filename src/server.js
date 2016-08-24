require('babel-register');
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

server.set('view engine', 'ejs');

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

server.get('/favicon.ico', function(req, res) {
  res.writeHead(200, { 'Content-Type': 'image/x-icon' });
  res.end();
});

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

// serve css
server.use(express.static(path.resolve('./src/www/')));
//server.get('*', require('./app').serverMiddleware);

// send all requests to index, let reacr router sort them out
// server.get('*', (req, res) => {
//   res.sendFile(path.resolve('./www/index.html'));
// });

server.get('*', (req, res) => {
  // routes is our object of React routes defined above
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      // something went badly wrong, so 500 with a message
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      // we matched a ReactRouter redirect, so redirect from the server
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      // if we got props, that means we found a valid component to render
      // for the given route
      const markup = renderToString(<RouterContext {...props} />);

      // render `index.ejs`, but pass in the markup we want it to display
      res.render('index', { markup })

    } else {
      // no route match, so 404. In a real app you might render a custom
      // 404 view here
      res.sendStatus(404);
    }
  });
});

// we are live!
server.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
