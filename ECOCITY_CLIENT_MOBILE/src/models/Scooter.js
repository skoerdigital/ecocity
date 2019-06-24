import { observable, decorate } from 'mobx';

export default class Scooter {
    id;
    coords;
    battery;
    lasu_used;

    constructor(obj){
            this.id = obj.id;
            this.coords = obj.coords;
            this.battery = obj.battery;
            this.last_used = obj.last_used
    }
}

decorate(Scooter, {
    id: observable,
    coords: observable,
    battery: observable,
    last_used: observable
})