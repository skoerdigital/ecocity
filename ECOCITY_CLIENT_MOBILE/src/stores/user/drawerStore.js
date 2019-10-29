import { observable, action, decorate } from 'mobx';


class ModalStore {
    isOpen = false;

   
}

decorate(ModalStore, {
    isOpen: observable,
    toggleModal: action,
    onModalClose: action
})

export default new ModalStore();

