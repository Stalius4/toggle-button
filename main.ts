let ab_was_released = false
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onButtonPressed(Button.AB, function () {
    if (ab_was_released == false) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (ab_was_released == true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (input.buttonIsPressed(Button.AB) && ab_was_released) {
        ab_was_released = false
    }
    ab_was_released = !(ab_was_released)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.forever(function () {
	
})
