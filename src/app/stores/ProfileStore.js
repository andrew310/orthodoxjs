// app/stores/TokenStore
import { observable, action, computed } from 'mobx';
import cookie from 'react-cookie';


class ProfileStore {

  @computed
  get needFetch(){
    return cookie.load('userToken');
  }


  @action
  printToken(){
    console.log(this.token);
  }
}

let store = new ProfileStore;
export default store;
