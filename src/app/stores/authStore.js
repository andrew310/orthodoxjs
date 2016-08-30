// src/app/stores/authStore.js

import { observable, action, autorun, transaction } from 'mobx';

class AuthStore {

  // login form username
  @observable login_username = '';

  // login form password
  @observable
  login_password = '';

  // handler for textfield change (login username)
  @action
  login_username_change = (value) => {
      this.login_username = value;
    }

  // handler for textfield change (login password)
  @action
  login_password_change = (value) => {
      this.login_password = value;
    }

  // reply from server
  @observable
  login_result = '';

  // handler for logging in request
  @action
  submit_login = () => {
    console.log(this.login_username)
    return fetch('http://138.68.49.15:8080/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.login_username,
        password: this.login_password
      })
    })
    .then((response) => {
      this.login_result = response;
      //return response.json()
    })
    .then(
      (result) => {console.log(result);},
      (error) => this.set_items_fetched(false)
    );
  }

}

let store = new AuthStore;
export default store;
