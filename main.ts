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
// When you shake the microbit it should show rock, paper, or scissors.
input.onGesture(Gesture.Shake, function () {
    // Choose a number 1-3.
    hand = randint(1, 3)
    // If hand equals 1 show paper.
    // If hand equals 2 show rock.
    // If hand equals 3 show scissors.
    if (hand == 1) {
        // Show paper
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (false) {
    	
    } else if (hand == 2) {
        // Show rock
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (false) {
    	
    } else if (hand == 3) {
        // Show scissors
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
