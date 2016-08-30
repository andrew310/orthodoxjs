// app/stores/TransportLayer

import { observable, action, computed } from 'mobx';

class TransportLayer {

  @action
  SUBMIT_AUTH_FORM = (username, password, uri, handler) => {
    return fetch(uri, {
      method: 'POST',
      headers: {
      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'username=' + username + '&' + 'password=' + password })
    .then((response) => {
      return response.json();
    })
    .then(
      (result) => handler(result),
      (error) => handler(error) //TODO: handle this in UI 
    );
  }


}

let store = new TransportLayer;
export default store;
