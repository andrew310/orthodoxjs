import React from 'react';
import Root from './containers';
import SignupForm from './containers/SignupForm';
import LoginForm from './containers/LoginForm';
import Home from './containers/Home';

const routes = {
  path: '/',
  component: Root,
  indexRoute: { components: Home},
  childRoutes: [
      {path: 'login', component: LoginForm},
      {path: 'signup', component: SignupForm}
  ]
}

export default routes
