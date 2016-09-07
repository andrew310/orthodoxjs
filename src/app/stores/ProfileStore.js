// app/stores/TokenStore
import { observable, action, computed } from 'mobx';
import cookie from 'react-cookie';


class ProfileStore {

  @computed
  get PROFILE(){
    return cookie.load('user');
  }

  @action
  SET_USER(user){
    cookie.save('user', user, {path: '/'});
  }

  @action
  CLEAR_USER(){
    cookie.remove('user', {path: '/'});
  }

}

let store = new ProfileStore;
export default store;
