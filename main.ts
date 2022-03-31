input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(180)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # . . #
        # # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        # # . . #
        # # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        # # . . #
        # # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . #
        # # . . #
        `)
    basic.pause(2000)
    basic.showString("GARAJE ABIERTO")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("CERRANDO PUERTA")
    servos.P0.setAngle(145)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . #
        # # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        # # . . #
        # # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        # # . . #
        # # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # . . #
        # # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(2000)
    basic.showString("GARRAJE CERRADO")
})
basic.forever(function () {
    if (input.lightLevel() < 30) {
        servos.P0.setAngle(180)
    }
})
