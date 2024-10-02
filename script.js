console.log('working')

//global variables
const magicNumber = document.querySelector('#magic-number')
const rollDiceButton = document.querySelector('#roll-dice')
const playAgainButton = document.querySelector('#play-again')
const predictButton = document.querySelector('#predict')
const predictionText = document.querySelector('#prediction-text')

let inputElements = document.querySelectorAll('.input')
let board = []
let field = false
let boardFull = false
let number = 0

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
}

function resetGame() {
    board = []
    number = 0
    screen1.style.display = 'inherit'
    screen2.style.display = 'none'
}

playAgainButton.addEventListener('click', resetGame)
rollDiceButton.addEventListener('click', rollDice)


//function: roll dice
//function: predict game

//eventlistener: predict button - predict game
//event listener: roll dice button - roll dice 
