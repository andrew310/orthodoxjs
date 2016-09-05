// src/app/stores/authStore.js

import { observable, action, computed } from 'mobx';
import TransportLayer from './TransportLayer';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router'

class AuthStore {

  /**
   *
   * Auth state variables.
   *
   */

  @computed
  get TOKEN() { return cookie.load('userToken'); }

  @observable IS_LOGGED_IN = this.TOKEN;

  @observable IS_FETCHING_LOGIN = false;

  @observable ERROR_MSG = null;

  @observable LOGIN_SUCCESS = false;


  /**
   *
   * Form related variables.
   *
   */

  // login form username
  @observable login_username = '';

  // login form password
  @observable
  login_password = '';


  /**
   *
   * ACTIONS
   *
   */


  /**
   * Handle results from server request.
   *
   * @return: null, however calls method to save token in cookie.
   * @param {object} result from server, contains JWT if login successful.
   * @private
   */

  @action
  HANDLE_RESULT = (result) => {
    if (result.token) {
      this.SET_TOKEN(result.token);
      this.login_username_change('');
      this.login_password_change('');
      this.IS_LOGGED_IN = true;
      browserHistory.push('/login');
    }
    else if (result.statusCode == 401) {
      this.ERROR_MSG = result.message;
    } else {
      this.ERROR_MSG = "Unknown error occured."
    }

    this.IS_FETCHING_LOGIN = false; // TODO: should I set this before comparing results?
  }


   /**
    * Hand off info and callback to function which sends (async) to server.
    *
    * @return none, but the callback we sent will be called and passed the results.
    * @private
    */

  @action
  submit_login = () => {
    this.IS_FETCHING_LOGIN = true;
    TransportLayer.SUBMIT_AUTH_FORM(this.login_username, this.login_password, 'http://138.68.49.15:8080/user/login', this.HANDLE_RESULT);
  }

  // signing out
  @action
  signout = () => {
    this.REMOVE_TOKEN();
    this.IS_LOGGED_IN = false;
  }

    // token set method
  @action
  SET_TOKEN = (token) => { cookie.save('userToken', token, { path: '/' }); }

  // token remove method
  @action
  REMOVE_TOKEN = () => { cookie.remove('userToken', { path: '/' }); }


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
}

let store = new AuthStore;
export default store;
