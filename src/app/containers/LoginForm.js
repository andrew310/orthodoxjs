import  React, { Component} from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {observer} from 'mobx-react';
import UserIcon from 'material-ui/svg-icons/action/account-circle';
import { browserHistory } from 'react-router'


// center our form
const styles = {
    container: {
      padding: '5%',
      display: 'table',
      margin: '0 auto'
    },
}

// access to related data store
@observer(["AuthStore"])
class LoginCard extends Component {
    constructor(props){
      super(props);
      this.handleLoginChange = this.handleLoginChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
      this.store = this.props.AuthStore;
    }

  // when value changes, update our store
  handleLoginChange(e){
    this.store.login_username_change(e.target.value);
  }

  // when password values changes, update store
  handlePasswordChange(e){
    this.store.login_password_change(e.target.value);
  }

  // handle submit to server
  handleLoginSubmit(){
    this.store.submit_login();
  }

  componentDidMount() {

    // this fixes a bug where the password box was autofilling, but not showing it had a value
    setTimeout(()=>{
      if (this.refs.username.getValue()) {
        this.refs.password.setState({...this.refs.password.state, hasValue: true})
      }
    }, 100)
  }

  // if token is there, login was successful
  componentDidUpdate() {
    if (this.store.TOKEN) {
      browserHistory.push('/');
    }
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
          <UserIcon style={{height: '60'}}/>
          </CardMedia>

            <div style={{display: 'block', margin: 'auto', width: '70%'}}>

                <TextField inputStyle={{maxHeight: 50}}
                  ref="username"
                  fullWidth={true}
                  floatingLabelText='username'
                  value={this.store.login_username}
                  onChange={this.handleLoginChange}
                />

                <TextField inputStyle={{maxHeight: 50}}
                ref="password"
                errorText={(() => {
                  if (this.store.ERROR_MSG) {
                    return this.store.ERROR_MSG;
                  }
                  })()}
                fullWidth={true}
                floatingLabelText="password"
                value={this.store.login_password}
                onChange={this.handlePasswordChange}
                type="password"
                />

                <br />

            </div>

          <CardActions style={{paddingLeft: 60, paddingRight: 60}}>
            <RaisedButton label="Submit" fullWidth={true} onClick={this.handleLoginSubmit} primary/>
          </CardActions>

        </Card>
        <br />
       </div>
    );
  }
};

export default LoginCard;
