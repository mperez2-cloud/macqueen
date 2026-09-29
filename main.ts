input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 99)
    led.plot(2, 2)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
    led.unplot(2, 2)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
