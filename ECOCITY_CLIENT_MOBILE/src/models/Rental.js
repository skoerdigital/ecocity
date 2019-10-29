import { observable, decorate } from 'mobx';

export default class Rental {
    id;
    startPoint;
    endPoint;
    chargedPrice;
    startTime;
    endTime;
    distanceKilometers;

  

    constructor(obj){
            this.id = obj.id;
            this.startPoint = obj.startPoint;
            this.endPoint = obj.endPoint;
            this.chargedPrice = obj.chargedPrice;
            this.startTime = obj.startTime;
            this.endTime = obj.endTime;
            this.distanceKilometers = obj.distanceKilometers
    }
}

decorate(Rental, {
    id: observable,
    startPoint: observable,
    endPoint: observable,
    chargedPrice: observable,
    startTime: observable,
    endTime: observable,
    distanceKilometers: observable
})