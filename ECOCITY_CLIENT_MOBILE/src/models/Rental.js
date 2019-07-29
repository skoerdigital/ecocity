import { observable, decorate } from 'mobx';

export default class Rental {
    id;
    startPoint;
    endPoint;
    amount;
    startTime;
    endTime;
    duration;
    distance;

    constructor(obj){
            this.id = obj.id;
            this.startPoint = obj.startPoint;
            this.endPoint = obj.endPoint;
            this.amount = obj.amount;
            this.startTime = obj.startTime;
            this.endTime = obj.endTime;
            this.duration = obj.duration;
            this.distance = obj.distance
    }
}

decorate(Rental, {
    id: observable,
    startPoint: observable,
    endPoint: observable,
    amount: observable,
    startTime: observable,
    endTime: observable,
    duration: observable,
    distance: observable
})