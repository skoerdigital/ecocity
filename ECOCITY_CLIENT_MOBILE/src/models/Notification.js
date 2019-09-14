import { observable, decorate } from 'mobx';

export default class Notification {
    id;
    title;
    message;
    timestamp;

    constructor(obj){
        this.id = obj.id;
        this.title = obj.title;
        this.message = obj.message;
        this.timestamp = obj.timestamp;   
    }
}

decorate(Notification, {
    id: observable,
    title: observable,
    message: observable,
    timestamp: observable
})