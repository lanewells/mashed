console.log('working')

const screen1 = document.querySelector('#screen1')
const screen2 = document.querySelector('#screen2')
const magicNumber = document.querySelector('#magic-number')
const rollDiceButton = document.querySelector('#roll-dice')
const playAgainButton = document.querySelector('#play-again')
const predictButton = document.querySelector('#predict')
const predictionText = document.querySelector('#prediction-text')

let inputElements = document.querySelectorAll('.input')
let board = []
let currentIndex = 0
let boardFull = false
let number = 0

let place = ""
let career = ""
let partner = ""
let car = ""

window.onload = function() {
    resetGame()
}

inputElements.forEach(element => {
    element.addEventListener('input', checkFull)
})

function checkFull() {
    board = [...inputElements].map(element => element.value)
    boardFull = board.every(value => value.trim() !== "")
    console.log(boardFull)
}

function rollDice() {
    number = (Math.floor(Math.random() * 9) + 1)
    magicNumber.textContent = number
    predictButton.disabled = false
}

function predict(board, number) {
    rollDiceButton.disabled = true
    if (board.length > 4) {
        let strike = ((number - 1) + currentIndex) % board.length
        board.splice(strike, 1)
        currentIndex = strike
        predict(board, number)

    }
    else if (board.length <= 4) {
        place = board[0]
        career = board[1]
        partner = board[2]
        car = board[3]
        console.log(place)
    }
}


function resetGame() {
    board = []
    number = 0
    currentIndex = 0
    rollDiceButton.disabled = false
    predictButton.disabled = true
    screen1.style.display = 'inherit'
    screen2.style.display = 'none'
}

playAgainButton.addEventListener('click', resetGame)
rollDiceButton.addEventListener('click', rollDice)
predictButton.addEventListener('click', () => predict(board, number))