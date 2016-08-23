import React, { Component, cloneElement } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router'
import Logo from 'material-ui/svg-icons/image/crop-free';
import SmallMenu from '../components/SmallMenu';
import { Provider } from 'mobx-react';
import { authStore } from '../stores/authStore';
import muiTheme from '../styles';

class Main extends Component {

  // set up binds and state
  constructor(props, context) {
    super(props, context);
    this.handleResize = this.handleResize.bind(this);
    this.getWindow = this.getWindow.bind(this);
    this.state = {
      open: false,
      windowWidth: window.innerWidth
    };
  }

  // add listeners
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  // keep track of window size so we can restyle AppBar
  handleResize(e) {
    this.setState({windowWidth: window.innerWidth});
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

  // whether to show buttons or small menu
  getWindow() {
      if(this.state.windowWidth > 600) {
        return (
        <div style={{paddingTop : '5px'}}>
          <FlatButton onClick={this.handleLoginButton} label="sign in"/>
          <FlatButton onClick={this.handleSignupButton} label="sign up"/>
        </div>
      );} else {
        return(
          <SmallMenu />
        );
      }
  }

  render() {
    const {props} = this
    const getWindow = this.getWindow()
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div >
            <AppBar style={{ paddingTop: 5, paddingLeft: '10%', paddingRight: '10%'}} onTitleTouchTap={this.handleTitleTouchTap}
              title={
                <TextField style={{marginLeft: 50, bottom: 6}}
                  hintText="Search"/>
              }
              iconElementLeft={
                  <Logo style={{paddingTop: 10, cursor: 'pointer'}} hoverColor={'#448AFF'} onClick={this.handleLogoTouchTap}/>
              }

              iconElementRight={
                <div>
                  {getWindow}
                </div>
              }

            />
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
