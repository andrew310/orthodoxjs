import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
    container: {
      paddingTop: '5%',
      marginLeft: '35%',
      marginRight: '35%'
    },
}

const signupCard = () => (
    <div style={styles.container}>
      <Card style={{maxWidth : "400"}}>
        <CardHeader
          title="Login"
          subtitle="Welcome back"
        />
        <div style={{padding: '2%'}}>
            <TextField floatingLabelText='username'/>
            <TextField
              floatingLabelText="password"
              type="password"
            /><br />
        </div>
        <CardActions>
          <RaisedButton label="Submit" primary/>
          <FlatButton label="Cancel" />
        </CardActions>
      </Card>
     </div>

);

module.exports = signupCard;
