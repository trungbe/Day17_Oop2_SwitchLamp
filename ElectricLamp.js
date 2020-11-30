class ElectricLamp {
    constructor(status) {
        this._status = status
    }


    turnOff() {
        this._status = false;
        console.log('tắt')
    }

    turnOn() {
        this._status = true;
        console.log('bật')
    }

    checkStatus(status) {
        this._status = status;
    }
}

let lamp = new ElectricLamp()
lamp.checkStatus(false);
