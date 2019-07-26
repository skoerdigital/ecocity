import { observable, action, decorate, computed, autorun } from 'mobx';

class MapStore {

    currentPosition = { 
        latitude: null,
        longitude: null
    };

    markerActive = false;

    navigateToPointDistance = 0;
    navigateToPointDuration = 0;

    selectedScooter = false;

    constructor(){
        this.currentPosition = { 
            latitude: 0,
            longitude: 0
        }
    }

    @computed get directionsParameters() {
        return this.navigateToPointDistance && this.navigateToPointDuration ? true : false
    }


    setSelectedScooter(scooter){
        this.selectedScooter = scooter;
    }

    setDirectionParameters(distance, duration){
        this.markerActive = true;
        this.navigateToPointDistance = distance;
        this.navigateToPointDuration = duration;
    }

    onDisactiveMarker(){
        if(this.markerActive){
            this.markerActive = false
        }
    }


    setCurrentPosition(coords){
        this.currentPosition = { 
            latitude: coords.latitude,
            longitude: coords.longitude
        }
    }
}

decorate(MapStore, {
    currentPosition: observable,
    setCurrentPosition: action,
    setDirectionParameters: action,
    navigateToPointDistance: observable,
    navigateToPointDuration: observable,
    directionsReady: observable,
    markerActive: observable,
    onDisactiveMarker: action,
    selectedScooter: observable
})


const store = new MapStore()
export default store;



autorun(() => {
    console.log(store.directionsReady)
})