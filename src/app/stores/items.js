// src/app/stores/items.js
require('isomorphic-fetch');
require('es6-promise').polyfill();
import { observable, action, autorun, transaction } from 'mobx';


class Items {


  @observable
  items_fetched = false;

  @observable
  items = [];

  @action
  add_item = (val) => {
    this.items.push(val);
  }

  @action
  get_items = () => {
    return items;
  }

  @action
  set_items_fetched = (val) => {
    if (val == true) {
      this.items_fetched = true;
    }
    if (val == false) this.items_fetched = false;
  }

  @action
  getItems = () => {
      return fetch('http://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        return response.json()
      })
      .then(
        (result) => {this.set_items_fetched(true); this.items = result},
        (error) => this.set_items_fetched(false)
      );
    }

}

let store = new Items;
export default store;
