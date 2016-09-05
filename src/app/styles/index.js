import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
  fontFamily: 'Open Sans, sans-serif',
  palette: {
    primary1Color: blueA200,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: redA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: blueGrey600,
    alternateTextColor: white,
    canvasColor: '#f8f8f8',
    borderColor: '#e7e7e7',
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack
  },
  appBar: {
      color:  '#f8f8f8',
      textColor: blueGrey600,
      height: 40,
      margin: 0
  },
  ListItem: {
      iconLeft: {paddingBottom : 20}
  }
});

export default muiTheme;
