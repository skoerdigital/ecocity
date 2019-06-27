import { observable, action, decorate } from 'mobx';


class MapStore {
    currentPosition;
    navigateToPointDistance;
    navigateToPointDuration;

    constructor(){
        this.currentPosition = { 
            latitude: 0,
            longitude: 0
        }
    }

    s

    setCurrentPosition(coords){
        this.currentPosition = { 
            latitude: coords.latitude,
            longitude: coords.longitude
        }
    }
}

decorate(MapStore, {
    currentPosition: observable,
    saveCurrentPosition: action,
    navigateToPointDistance: observable,
    navigateToPointDuration: observable
})

export default new MapStore();

