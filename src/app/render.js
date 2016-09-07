import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { routes } from './routes';
import { Provider } from 'mobx-react';
import AuthStore from './stores/AuthStore';
import SignupStore from './stores/SignupStore';
import ProfileStore from './stores/ProfileStore';
import Items from './stores/items';
import cookie from 'react-cookie';

export default (req, res) => {

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

      //cookie.save('userToken', "token here!", { path: '/' });
      //cookie.remove('userToken', { path: '/'});

      // Component found for this path
      const markup = renderToString(
        <Provider {...{AuthStore, Items, SignupStore, ProfileStore}}>
          <RouterContext {...props} />
        </Provider>
        );

      // Render template and inject markup
      res.render('index', { markup })

    } else {
      res.sendStatus(404);
    }
  });
}
