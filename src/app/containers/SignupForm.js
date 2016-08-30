import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {observer} from 'mobx-react';
import UserIcon from 'material-ui/svg-icons/action/account-circle';


const styles = {
    container: {
      padding: '5%',
      display: 'table',
      margin: '0 auto'
    },
}

@observer(["SignupStore"])
class SignupCard extends React.Component {
    constructor(props){
      super(props);

      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
      this.store = this.props.SignupStore;
    }
    handleUsernameChange(e){
      this.store.signup_username_change(e.target.value);
    }
    handlePasswordChange(e){
      this.store.signup_password_change(e.target.value);
    }
    handleSignupSubmit(){
      this.store.submit_signup();
    }

    componentDidMount() {

      // this fixes a bug where the password box was autofilling, but not showing it had a value
      setTimeout(()=>{
        if (this.refs.username.getValue()) {
          this.refs.password.setState({...this.refs.password.state, hasValue: true})
        }
      }, 100)
    }

  render(){
    return (
      <div style={styles.container}>

        <Card style={{minWidth: 200, maxWidth: 400, paddingBottom: 36}}>

          <CardHeader
            title="Create Account"
            subtitle="Join us!"
          />
          <CardMedia style={{backgroundColor: '#ECEFF1', height: 60}}>
          <UserIcon style={{height: '60'}}/>
          </CardMedia>

          <div style={{display: 'block', margin: 'auto', width: '70%'}}>
            <TextField fullWidth={true} inputStyle={{maxHeight: 50}} ref="username" floatingLabelText='username' value={this.store.signup_username} onChange={this.handleUsernameChange}/>
            <TextField fullWidth={true} inputStyle={{maxHeight: 50}} ref="password" floatingLabelText="password" value={this.store.signup_password} onChange={this.handlePasswordChange} type="password"/>
            <br />
          </div>

          <CardActions style={{paddingLeft: 60, paddingRight: 60}}>
            <RaisedButton label="Submit" fullWidth={true} onClick={this.handleSignupSubmit} primary/>
          </CardActions>

        </Card>

        <br />
      </div>
    );
  }
}


module.exports = SignupCard;
