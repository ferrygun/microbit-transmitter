let stable = false
let now = 0
let mail = 0
let run = false
let firsttime = 0
let now1 = 0
bluetooth.onBluetoothConnected(() => {
	
})
bluetooth.onBluetoothDisconnected(() => {
	
})
basic.forever(() => {
    if (firsttime == 0) {
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            mail = 1
        }
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            mail = 0
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        control.reset()
    }
})
basic.forever(() => {
    if (mail == 1 && stable == true && firsttime == 0) {
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        	
        }
        firsttime = 1
    }
    if (mail == 0 && stable == true && firsttime == 0) {
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        	
        }
    }
    if (stable == false) {
        now = input.runningTime()
        if (now > now1 + 3 * 1000 * 60) {
            stable = true
        }
    }
    if (firsttime == 1 && run == false) {
        // basic.showString("V")
        bluetooth.advertiseUrl(
        "http://www.google.com",
        7,
        false
        )
        run = true
    }
})
now1 = input.runningTime()
// basic.showString("I")
firsttime = 0
run = false
bluetooth.stopAdvertising()
firsttime = 0
