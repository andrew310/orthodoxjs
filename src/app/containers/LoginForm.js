import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = {
    container: {
      padding: '5%',
      display: 'block',
      margin: 'auto',
      width: '40%'
    },
}

const LoginCard = () => (
    <div style={styles.container}>

      <Card style={{minWidth: 200, maxWidth: 400, paddingBottom: 36}}>

        <CardHeader
          title="Login"
          subtitle="Welcome back"
        />
        <CardMedia style={{backgroundColor: '#ECEFF1', height: 60}}>
        </CardMedia>

          <div style={{display: 'block', margin: 'auto', width: '70%'}}>
              <TextField fullWidth={true} floatingLabelText='username'/>
              <TextField fullWidth={true} floatingLabelText="password" type="password"/>
              <br />
          </div>

        <CardActions style={{paddingLeft: 60, paddingRight: 60}}>
          <RaisedButton label="Submit" fullWidth={true} primary/>
        </CardActions>

      </Card>

      <br />
     </div>
);

module.exports = LoginCard;
