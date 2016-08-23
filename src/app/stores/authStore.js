// src/app/stores/authStore.js

import { observable, action, autorun, transaction } from 'mobx';

class AuthStore {

  // login form values
  @observable login_username = 'BRO';

  @observable
  password = '';

  @action
  login_username_change = (value) => {
      this.login_username = value;
      console.log(value);
    }

}

let store = new AuthStore;
export default store;
