import { observable, runInAction, decorate, action } from 'mobx';
import PayPalService from '../../services/PayPalService';

class PaymentStore {

    constructor(){
        this.paypalService = new PayPalService();
    }

    accessToken =  null;
    approvalUrl = null;
    paymentId =  null;

    dataDetail = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "transactions": [{
            "amount": {
                "total": "100",
                "currency": "EUR",
                "details": {
                    "subtotal": "100",
                    "tax": "0",
                    "shipping": "0",
                    "handling_fee": "0",
                    "shipping_discount": "0",
                    "insurance": "0"
                }
            }

        }],
        "redirect_urls": {
            "return_url": "https://example.com",
            "cancel_url": "https://example.com"
        }
    };

    status = "initial";

    pay = async () => {
        try {
            this.status = "pending";
            const data = await this.paypalService.initConnection();
            const payment = await this.paypalService.makePayment(data.access_token, this.dataDetail);
            console.log(data);
            console.log(payment);
            const { id, links } = payment;
            const approvalUrl = links.find(data => data.rel == "approval_url")

            runInAction(() => {

                this.accessToken = data.access_token;
                this.paymentId = id;
                this.approvalUrl = approvalUrl.href;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
                console.log(error)
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
