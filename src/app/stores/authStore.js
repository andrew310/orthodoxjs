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

}

let store = new AuthStore;
export default store;
