input.onButtonPressed(Button.AB, function () {
    Steps = 0
})
input.onGesture(Gesture.Shake, function () {
    Steps += 1
    basic.showNumber(Steps)
})
let Steps = 0
Steps = 0
