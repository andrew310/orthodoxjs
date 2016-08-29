// src/app/stores/authStore.js

import { observable, action, autorun, transaction } from 'mobx';

class AuthStore {

  // login form values
  @observable login_username = '';

  @observable
  login_password = '';

  @action
  login_username_change = (value) => {
      this.login_username = value;
    }

  @action
  login_password_change = (value) => {
      this.login_password = value;
    }

  @observable
  login_result = '';

  @action
  submit_login = () => {
    console.log(this.login_username)
    return fetch('LOGIN URL HERE', {
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
