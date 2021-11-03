let PlayerAScore = 0
let PlayerBScore = 0
let hand = 0
input.onButtonPressed(Button.A, function () {
    PlayerAScore = PlayerAScore + 1
    if (PlayerAScore == 10) {
        basic.showString("Player A Wins!")
        PlayerAScore = 0
        PlayerBScore = 0
    }
})
input.onButtonPressed(Button.B, function () {
    PlayerBScore = PlayerBScore + 1
    if (PlayerBScore == 10) {
        basic.showString("Player B Wins!")
        PlayerAScore = 0
        PlayerBScore = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (false) {
    	
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (false) {
    	
    } else if (hand == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
