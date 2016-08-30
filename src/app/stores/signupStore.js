// src/app/stores/signupStore.js

import { observable, action, autorun, transaction } from 'mobx';

class SignupStore {

  // signup form username
  @observable
  signup_username = '';

  // login form password
  @observable
  signup_password = '';

  // handler for textfield change (signup username)
  @action
  signup_username_change = (value) => {
      this.signup_username = value;
    }

  // handler for textfield change (signup password)
  @action
  signup_password_change = (value) => {
      this.signup_password = value;
    }

  // reply from server
  @observable
  signup_result = '';

  // handler for logging in request
  @action
  submit_signup = () => {
    console.log(this.signup_username)
    return fetch('YOUR CREATE URL HERE', {
      method: 'POST',
      headers: {
      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'username=' + this.signup_username + '&' + 'password=' + this.signup_password })
    .then((response) => {
      this.signup_result = response;
      console.log(response);
      //return response.json()
    })
    .then(
      (result) => {console.log(result);},
      (error) => this.set_items_fetched(false)
    );
  }

}

let store = new SignupStore;
export default store;
