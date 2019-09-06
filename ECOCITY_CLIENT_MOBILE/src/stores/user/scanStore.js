import {observable, action, decorate} from 'mobx'

class ScanStore {
    light = false;
    promptInput = false;
    inputValue = null

    toggleLight(){
        this.light = !this.light;
    }

    turnOffLight(){
        this.light = false;
    }

    togglePromptInput(){
        this.promptInput = !this.promptInput
    }

    changeInputValue(value){
        this.inputValue = value
    }

}

decorate(ScanStore, {
    light: observable,
    promptInput: observable,
    inputValue: observable,
    toggleLight: action,
    togglePromptInput: action,
    changeInputValue: action
})

const scanStore = new ScanStore()
export default scanStore