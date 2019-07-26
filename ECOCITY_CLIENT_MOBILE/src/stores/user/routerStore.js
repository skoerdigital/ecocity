import {observable, action, decorate} from 'mobx'

class RouterStore {
  activeRoute = null;
  
  setRoute(route){
      this.activeRoute = route
  }
}

decorate(RouterStore, {
    activeRoute: observable,
    setRoute: action
})

const routerStore = new RouterStore()
export default routerStore