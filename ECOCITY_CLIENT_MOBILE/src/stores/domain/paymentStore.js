import { observable, runInAction, decorate, action } from 'mobx';
import PayPalService from '../../services/PayPalService';

class PaymentStore {

    constructor(){
        this.paypalService = new PayPalService();
    }

    status = "initial";

    pay = async () => {
        try {
            this.status = "pending";
            const data = await this.paypalService.initConnection();
            runInAction(() => {
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };


}

decorate(PaymentStore, {
    pay: action,
    status: observable,
    accessToken: observable,
    approvalUrl: observable,
    paymentId: observable
});

export default new PaymentStore();
