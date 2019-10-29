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
                    let updatedRental = {
                        ...rental,
                        get duration(){
                            return new Date(this.endTime - this.startTime)
                        }
                    }
                    this.rentalData.push(new Rental(updatedRental));
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