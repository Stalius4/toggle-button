let ab_was_released = false
input.onButtonPressed(Button.AB, function () {
    if (input.buttonIsPressed(Button.AB) && ab_was_released) {
        ab_was_released = false
    }
    ab_was_released = !(ab_was_released)
})
basic.forever(function () {
    if (ab_was_released == false) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (ab_was_released == true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
