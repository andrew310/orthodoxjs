// app/stores/TokenStore
import { observable, action, computed } from 'mobx';
import cookie from 'react-cookie';


class TokenStore {

  @computed
  get token(){
    return cookie.load('userToken');
  }

  console.log(this.token())
}

let store = new TokenStore;
export default store;
