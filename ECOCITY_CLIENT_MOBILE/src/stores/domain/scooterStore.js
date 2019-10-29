import { observable, runInAction, decorate, action } from 'mobx';
import ScooterService from '../../services/ScooterService'
import Scooter from '../../models/Scooter';


class ScooterStore {

constructor(){
    this.scooterService = new ScooterService();
}
    scooterData = [];
    status = "initial";
    isRideActive = false;
    timeElapsed = 0 // in seconds

    @action
    getScootersAsync = async () => {
        try {
            const data = await this.scooterService.get();
            runInAction(() => {
                data.map(scooter=>{
                    this.scooterData.push(new Scooter(scooter))
                })
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    onFindScooterAsync = async (id) => {
        try {
            const data = await this.scooterService.beep();
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    onUnlockScooterAsync = async (id) => {
        try {
            const data = await this.scooterService.unlock();
            runInAction(() => {
                this.isRideActive = true;
                this.rideTimer(this.isRideActive);
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    onLockScooterAsync = async (id) => {
        try {
            const data = await this.scooterService.lock();
            runInAction(() => {
                this.isRideActive = false;
                this.rideTimer(this.isRideActive);
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    rideTimer = (status) => {
        let interval = null;
        if(status)
            interval = setInterval( _ => {
                this.timeElapsed += 1;
            }, 1000)
        else interval != null ? clearInterval(interval) : null;
    }

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
    scooterData: observable,
    isRideActive: observable, 
    onFindScooterAsync: action,
    onUnlockScooterAsync: action,
    timeElapsed: observable
});

export default new ScooterStore();