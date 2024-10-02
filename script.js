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

//reset game function upon game loading

function resetGame() {
    board = []
    number = 0
    screen1.style.display = 'inherit'
    screen2.style.display = 'none'
}

playAgainButton.addEventListener('click', resetGame)

//function: check if board full
//function: roll dice
//function: predict game
//function: reset game

//eventlistener: predict button - predict game
//event listener: each input field - check if full
//event listener: roll dice button - roll dice 
//event listener: play again - reset game