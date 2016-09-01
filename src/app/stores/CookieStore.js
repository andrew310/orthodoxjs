// app/stores/TokenStore
import { observable, action, computed } from 'mobx';
import cookie from 'react-cookie';


class CookieStore {

  @computed
  get token(){
    return cookie.load('userToken');
  }


  @action
  printToken(){
    console.log(this.token);
  }
}

let store = new CookieStore;
export default store;
