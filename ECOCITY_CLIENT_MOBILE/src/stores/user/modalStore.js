import { observable, action, decorate } from 'mobx';


class ModalStore {
    isOpen = false;

    openModal(){
        this.isOpen = true;
    }

    onModalClose(){
        this.isOpen = false
    }
}

decorate(ModalStore, {
    isOpen: observable,
    toggleModal: action,
    onModalClose: action
})

export default new ModalStore();

