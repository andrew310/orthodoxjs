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

export default function Root({ children }) {
  return (
   <MuiThemeProvider muiTheme={muiTheme}>
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
