import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory, Router } from 'react-router'
import { routes } from './routes';
import { Provider } from 'mobx-react';
import AuthStore from './stores/authStore';

// Needed for onTouchTap, see http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <Provider {...{AuthStore}}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
    document.getElementById('app')
);
