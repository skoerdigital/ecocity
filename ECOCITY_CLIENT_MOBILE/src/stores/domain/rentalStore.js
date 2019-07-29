import { observable, runInAction, decorate, action } from 'mobx';
import RentalService from '../../services/RentalService';
import Rental from '../../models/Rental';

class RentalStore {

    constructor(){
        this.rentalService = new RentalService();
    }

    rentalData = [];
    status = "initial";

    @action
    getRentalsAsync = async () => {
        try {
            const data = await this.rentalService.get();
            runInAction(() => {
                data.map(rental=>{
                    this.rentalData.push(new Rental(rental));
                })
            });
            
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };
    // createCountryAsync = async (model) => {
    //     try {
    //         const response = await this.countryService.post(model);
    //         if (response.status === 201) {
    //             runInAction(() => {
    //                 this.status = "success";
    //             })
    //         } 
    //     } catch (error) {
    //         runInAction(() => {
    //             this.status = "error";
    //         });
    //     }

    // };
    // updateCountryAsync = async (vehicle) => {
    //     try {
    //         const response = await this.countryService.put(vehicle)
    //         if (response.status === 200) {
    //             runInAction(() => {
    //                 this.status = "success";
    //             })
    //         } 
    //     } catch (error) {
    //         runInAction(() => {
    //             this.status = "error";
    //         });
    //     }
    // };
    // deleteCountryAsync = async (id) => {
    //     try {
    //         const response = await this.countryService.delete(id);
    //         if (response.status === 204) {
    //             runInAction(() => {
    //                 this.status = "success";
    //             })
    //         } 
    //     } catch (error) {
    //         runInAction(() => {
    //             this.status = "error";
    //         });
    //     }
    // }
}

decorate(RentalStore, {
    rentalData: observable
});

export default new RentalStore();