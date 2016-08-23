import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router'
import SvgIcon from 'material-ui/SvgIcon';
import Logo from 'material-ui/svg-icons/device/brightness-low';
import SmallMenu from '../components/SmallMenu';
import {
  blueA200,
  blueGrey50,
  blueGrey600,
  blueGrey700,
  redA200,
  cyan500,
  cyan700,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  fullBlack
  } from 'material-ui/styles/colors';


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

const appBarShow = () => {

}

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
            <AppBar style={{ paddingTop: 5, paddingLeft: '10%', paddingRight: '10%', backgroundColor : muiTheme.appBar.primary1Color}} onTitleTouchTap={this.handleTitleTouchTap}

              iconElementLeft={
                <div>
                <TextField style={{ position: 'relative', left: '5%'}} hintText="Search"/>
                </div>
              }

              iconElementRight={
                <div>
                  {getWindow}
                </div>
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
