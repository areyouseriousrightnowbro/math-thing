input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        operation += 1
        operation = operation % 3
        basic.showString("" + (choice[operation]),70)
    } else if (state > 0) {
        temp += 1
        basic.showNumber(temp,70)
    }
})
function quadratic_formula () {
	
}
function set_all_variables () {
    temp = 0
    state = 0
    operation = 0
    num1 = 0
    num2 = 0
    num3 = 0
    num4 = 0
    choice = ["find line", "quadratic", "intersection"]
}
input.onButtonPressed(Button.AB, function () {
    if (state == 0) {
        change_state()
    } else if (state == 1) {
        num1 = temp
        change_state()
    } else if (state == 2) {
        num1 = temp
        change_state()
    } else if (state == 3) {
        num1 = temp
        change_state()
    } else if (state == 4) {
        num1 = temp
        change_state()
    } else if (state > 4) {
        state = 0
        basic.showString("RESET",70)
    }
})
input.onButtonPressed(Button.B, function () {
    if (state > 0) {
        temp += -1
        basic.showNumber(temp,70)
    }
})
function change_state () {
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    state += 1
    temp = 0
}
let num4 = 0
let num3 = 0
let num2 = 0
let num1 = 0
let state = 0
let temp = 0
let operation = 0
let choice: string[] = []
set_all_variables()
