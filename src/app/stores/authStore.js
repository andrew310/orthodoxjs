// src/app/stores/authStore.js

import { action, observable } from 'mobx';

class AuthStore {

  // login form values
  @observable login_username = '';

  @observable
  password = '';


  login_username_change (value) {
    this.login_username = value
    console.log(value);
  }

  constructor(){}

}

const authStore = new AuthStore;
export default authStore;
