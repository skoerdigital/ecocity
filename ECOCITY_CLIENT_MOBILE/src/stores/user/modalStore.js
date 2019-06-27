import { observable, action, decorate } from 'mobx';


class ModalStore {
    isOpen = false;
    selectedScooter;

    constructor(){
        //this.isOpen = true;
        this.selectedScooter = {};
    }

    openModal(scooter){
        this.isOpen = true;
        this.selectedScooter = scooter
    }

    onModalClose(){
        this.isOpen = false
    }
}

decorate(ModalStore, {
    isOpen: observable,
    toggleModal: action,
    onModalClose: action,
    selectedScooter: observable
})

export default new ModalStore();

