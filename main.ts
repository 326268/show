for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= y; x++) {
        led.plot(x, y)
        basic.pause(100)
    }
}
basic.clearScreen()
