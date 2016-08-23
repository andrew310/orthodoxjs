import React, { Component, cloneElement } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router'
import { Provider } from 'mobx-react';
import { authStore } from '../stores/authStore';
import muiTheme from '../styles';
import NavBar from '../components/NavBar';

class Main extends Component {

  // set up binds and state
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
  }

  // use react router to change views
  handleLoginButton() {
    browserHistory.push('/login');
  }

  // user react router to change views
  handleSignupButton() {
    browserHistory.push('/signup');
  }

  // logo takes user to home page
  handleLogoTouchTap() {
    browserHistory.push('/');
  }

  render() {
    const {props} = this
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div >
          <NavBar />
            <Provider {...{ authStore }}>
              {props.children}
            </Provider>
        </div>
      </MuiThemeProvider>
    );
  }
}

Main.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Main;
