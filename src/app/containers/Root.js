import React, {Component} from 'react';
import {blueA200, blueGrey50, blueGrey600, blueGrey700, redA200} from 'material-ui/styles/colors';
import {cyan500, cyan700, pinkA200, grey50, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Signup from './SignupForm'
import { browserHistory } from 'react-router'
import SvgIcon from 'material-ui/SvgIcon';
import Logo from 'material-ui/svg-icons/device/brightness-low';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  voting: {
      paddingBottom: 5
  }
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueA200,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: redA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: blueGrey600,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack
  },
  appBar: {
      primary1Color: white,
      textColor: blueGrey600,
      height: 40,
      margin: 0
  },
  ListItem: {
      iconLeft: {paddingBottom : 20}
  }
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleLoginButton = this.handleLoginButton.bind(this);
    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

   handleLoginButton() {
      browserHistory.push('/login');
  }
  handleSignupButton() {
      browserHistory.push('/signup');
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );
    const {props} = this
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <AppBar style={{ paddingTop: 5, backgroundColor : muiTheme.appBar.primary1Color}} onTitleTouchTap={this.handleTitleTouchTap}

              iconElementLeft={
                <div>
                <TextField style={{ position: 'relative', left: '5%'}} hintText="Search"/>
                </div>
              }

              iconElementRight={
                <div style={{paddingTop : '5px'}}>
                <FlatButton onClick={this.handleLoginButton} label="sign in"/>
                <FlatButton onClick={this.handleSignupButton} label="sign up"/></div>
              }
              
            />
            {props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

Main.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Main;
