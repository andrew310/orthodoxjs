// src/app/stores/authStore.js

import { observable, action, autorun, transaction } from 'mobx';

class AuthStore {

  /*
   * AUTH STATE
   */

  // jwt stored here
  @observable TOKEN = null;

  @observable IS_LOGGED_IN = false;

  @observable IS_FETCHING_LOGIN = false;

  @observable ERROR_MSG = null;

  @observable LOGIN_SUCCESS = false;


  /*
   * FORM RELATED
   */

  // login form username
  @observable login_username = '';

  // login form password
  @observable
  login_password = '';


  // reply from server
  @observable
  login_result = '';

  /*
   * ACTIONS
   */

   @action
   HANDLE_RESULT = (result) => {
     console.log(result);
     if (result.token) {
       this.TOKEN = result.token;
     }
     else if (result.statusCode == 401) {
       this.ERROR_MSG = result.message;
     }
   }

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
    return fetch('YOUR LOGIN URI HERE', {
      method: 'POST',
      headers: {
      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'username=' + this.login_username + '&' + 'password=' + this.login_password })
    .then((response) => {
      return response.json();
    })
    .then(
      (result) => this.HANDLE_RESULT(result),
      (error) => this.set_items_fetched(false)
    );
  }

}

let store = new AuthStore;
export default store;
