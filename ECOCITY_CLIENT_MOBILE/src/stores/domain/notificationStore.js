import { observable, runInAction, decorate, action } from 'mobx';
import NotificationService from '../../services/NotificationService';
import Notification from '../../models/Notification';



class NotificationStore {

    constructor(){
        this.notificationService = new NotificationService();
    }

    notificationData = [];
    status = "initial";

    getNotificationsAsync = async () => {
        this.notificationData = [];
        try {
            this.status = "pending";
            const data = await this.notificationService.get();
            runInAction(() => {
                data.map((notification)=>{
                    this.notificationData.push(new Notification(notification));
                });
                console.log(this.notificationData);
                this.status = "success";
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };
}

decorate(NotificationStore, {
    notificationData: observable,
    getNotificationsAsync: action,
    status: observable
});

export default new NotificationStore();
