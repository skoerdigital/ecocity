import { observable, runInAction, decorate, action } from 'mobx';
import RentalService from '../../services/RentalService';
import Rental from '../../models/Rental';


class RentalStore {

    constructor(){
        this.rentalService = new RentalService();
    }

    rentalData = [];
    status = "initial";
    test = "start";

    getRentalsAsync = async () => {
        this.rentalData = [];
        try {
            this.status = "pending";
            const data = await this.rentalService.get();
            runInAction(() => {
                data.map((rental, index)=>{
                    rental.id = rental.id + index;
                    this.rentalData.push(new Rental(rental));
                });
                this.status = "success";
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };
}

decorate(RentalStore, {
    rentalData: observable,
    getRentalsAsync: action,
    status: observable,
    test: observable
});

export default new RentalStore();