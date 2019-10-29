import {observable, action, decorate} from 'mobx'

class ScanStore {
    light = false;
    promptInput = false;
    inputValue = null;
    shouldReadBarcode = true;
    qrCodeValue = null;

    toggleLight(){
        this.light = !this.light;
    }

    togglePromptInput(){
        this.promptInput = !this.promptInput
    }

    changeInputValue(value){
        this.inputValue = value
    }

    turnOffBarcodeReading(){
        this.shouldReadBarcode = false;
    }

    setQRCodeValue(value){
        this.qrCodeValue = value;
    }

    initStoreSettings(){
        this.light = false;
        this.shouldReadBarcode = true;
    }

}

decorate(ScanStore, {
    light: observable,
    promptInput: observable,
    inputValue: observable,
    shouldReadBarcode: observable,
    toggleLight: action,
    togglePromptInput: action,
    changeInputValue: action,
    qrCodeValue: observable,
    initStoreSettings: action
})

const scanStore = new ScanStore()
export default scanStore