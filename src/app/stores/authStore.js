// src/app/stores/authStore.js

import { observable, action, autorun, transaction } from 'mobx';

class AuthStore {

  /* AUTH STATE */

  // jwt stored here
  @observable TOKEN = null;

  // logged in or not
  @observable IS_LOGGED_IN = false;

  /* FORM RELATED */

  // login form username
  @observable login_username = '';

  // login form password
  @observable
  login_password = '';


  // reply from server
  @observable
  login_result = '';

  /* ACTIONS */

  // token set method
  @action
  SET_TOKEN = (token) => { this.TOKEN = token; console.log(this.TOKEN); }

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

  // handler for logging in request
  @action
  submit_login = () => {
    return fetch('http://138.68.49.15:8080/user/login', {
      method: 'POST',
      headers: {
      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'username=' + this.login_username + '&' + 'password=' + this.login_password })
    .then((response) => {
      this.login_result = response;
      console.log(response);
      return response.json();
    })
    .then(
      (result) => this.SET_TOKEN(result),
      (error) => this.set_items_fetched(false)
    );
  }

}

let store = new AuthStore;
export default store;
