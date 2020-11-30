class SwitchButton {
    constructor(status, electricLamp) {
        this._status = status
        this._electricLamp = electricLamp
    }

    connectToLamp(electricLamp) {
        this._electricLamp = electricLamp;
    }

    switchOff() {
        this._electricLamp.turnOff()

    }

    switchOn() {
        this._electricLamp.turnOn()
    }
}
let btnSwitch = new SwitchButton()
btnSwitch.connectToLamp(lamp);
