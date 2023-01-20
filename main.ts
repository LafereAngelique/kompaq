let graden = 0
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    graden = input.compassHeading()
    if (input.compassHeading() < 135) {
        basic.showArrow(ArrowNames.West)
    } else {
        if (input.compassHeading() < 225) {
            basic.clearScreen()
            basic.showArrow(ArrowNames.South)
        } else {
            if (input.compassHeading() < 315) {
                basic.clearScreen()
                basic.showArrow(ArrowNames.East)
            } else {
                if (input.compassHeading() < 360 || input.compassHeading() < 45) {
                    basic.clearScreen()
                    basic.showArrow(ArrowNames.North)
                }
            }
        }
    }
})
