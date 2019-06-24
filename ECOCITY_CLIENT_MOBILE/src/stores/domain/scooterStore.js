import { observable, runInAction, decorate, action } from 'mobx';
import ScooterService from '../../services/ScooterService'
import Scooter from '../../models/Scooter';


class ScooterStore {

constructor(){
    this.scooterService = new ScooterService();
}
    scooterData = [];
    status = "initial";

    @action
    getScootersAsync = async () => {
        try {
            const data = await this.scooterService.get();
            runInAction(() => {
                data.map(scooter=>{
                    this.scooterData.push(new Scooter(scooter))
                })
                window.scooterData = scooterData
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

decorate(ScooterStore, {
    scooterData: observable
});

export default new ScooterStore();