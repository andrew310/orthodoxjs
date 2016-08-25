import React, { Component, cloneElement } from 'react';
import { useStrict } from 'mobx';
useStrict();
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router'
import { Provider } from 'mobx-react';
import AuthStore from '../stores/authStore';
import muiTheme from '../styles';
import NavBar from '../components/NavBar';
import DevTools from 'mobx-react-devtools';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default function Root({ children }) {

  // Merge theme with useragent
  let theme = muiTheme;
  let obj2 = {userAgent: navigator.useragent};
  for (var attrname in obj2) {theme[attrname] = obj2[attrname]};

  // Return app wrapped in muitheme
  return (
   <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
     <div >
        <main role="main">
         <NavBar />
           <Provider {...{AuthStore}}>
             {children}
           </Provider>
           <DevTools position={{ bottom: 0, right: 20 }} />
         </main>
     </div>
   </MuiThemeProvider>
  );
}
