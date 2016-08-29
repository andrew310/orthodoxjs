import  React, { Component} from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {observer} from 'mobx-react';


const styles = {
    container: {
      padding: '5%',
      display: 'block',
      margin: 'auto',
      width: '40%'
    },
}

@observer(["AuthStore"])
class LoginCard extends Component {
    constructor(props){
      super(props);
      console.log(props)
      this.handleLoginChange = this.handleLoginChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
      this.store = this.props.AuthStore;
    }
  handleLoginChange(e){
    this.store.login_username_change(e.target.value);
  }
  handlePasswordChange(e){
    this.store.login_password_change(e.target.value);
  }
  handleLoginSubmit(){
    this.store.submit_login();
  }

  render(){
    return (
      <div style={styles.container}>

        <Card style={{minWidth: 200, maxWidth: 400, paddingBottom: 36}}>

          <CardHeader
            title="Login"
            subtitle="Welcome back"
          />
          <CardMedia style={{backgroundColor: '#ECEFF1', height: 60}}>
          </CardMedia>

            <div style={{display: 'block', margin: 'auto', width: '70%'}}>
                <TextField fullWidth={true} floatingLabelText='username' value={this.store.login_username} onChange={this.handleLoginChange}/>
                <TextField fullWidth={true} floatingLabelText="password" value={this.store.login_password} onChange={this.handlePasswordChange} type="password"/>
                <br />
            </div>

          <CardActions style={{paddingLeft: 60, paddingRight: 60}}>
            <RaisedButton label="Submit" fullWidth={true} onClick={this.store.handleLoginSubmit} primary/>
          </CardActions>

        </Card>
          <div>{this.store.login_result} </div>
        <br />
       </div>
    );
  }
};

export default LoginCard;
