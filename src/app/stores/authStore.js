// src/app/stores/authStore.js

import { observable, action, computed } from 'mobx';
import TransportLayer from './TransportLayer';
import cookie from 'react-cookie';


class AuthStore {

  /*
   * AUTH STATE
   */

  // jwt stored here
  @computed
  get TOKEN() { return cookie.load('userToken'); }

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


  /*
   * ACTIONS
   */

   @action
   HANDLE_RESULT = (result) => {
     if (result.token) {
       SET_TOKEN(result.token);
       this.login_username_change('');
       this.login_password_change('');
     }
     else if (result.statusCode == 401) {
       this.ERROR_MSG = result.message;
     } else {
       this.ERROR_MSG = "Unknown error occured."
     }

     this.IS_FETCHING_LOGIN = false; // TODO: should I set this before comparing results?
   }

  // token set method
  @action
  SET_TOKEN = (token) => {cookie.save('userToken', token, { path: '/' });}

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
    this.IS_FETCHING_LOGIN = true;
    TransportLayer.SUBMIT_AUTH_FORM(this.login_username, this.login_password, 'http://138.68.49.15:8080/user/login', this.HANDLE_RESULT);
  }

}

let store = new AuthStore;
export default store;
