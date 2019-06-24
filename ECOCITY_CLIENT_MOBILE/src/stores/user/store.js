import {observable, action, computed} from 'mobx'

let index = 0

class ListStore {
  @observable list = [];
  @observable text = 'Text';

  @computed get edited(){
      return this.text + "nowy";
  }
  
  @action
  changeText(text){
      this.text = text
  }
}

const listStore = new ListStore()
export default listStore