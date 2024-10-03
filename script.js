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
let boardFull = false
let number = 0

window.onload = function() {
    resetGame()
    console.log("game is reset")
}

inputElements.forEach(element => {
    element.addEventListener('input', checkFull)
})

function checkFull() {
    board = [...inputElements].map(element => element.value)
    boardFull = board.every(value => value.trim() !== "")
    console.log(`board is full: ${boardFull}`)
}

function rollDice() {
    number = (Math.floor(Math.random() * 9) + 1)
    magicNumber.textContent = number
    predictButton.disabled = false
    console.log(`the magic number is: ${number}`)
}

function predict() {
    rollDiceButton.disabled = true
    board.unshift('mansion', 'apartment', 'shack', 'house')
    console.log(`current board is: ${board}`)
    let currentIndex = 0

    if (currentIndex === 0) {
        console.log("current index is 0")
    }

    while (board.length > 5) {

        let strike = (currentIndex + (number - 1)) % board.length;
        let item = board[strike]
        console.log(`striking at this index: ${strike} this item: ${item}`);
        
        board.splice(strike, 1);
        currentIndex = strike;
    }

    if (board.length <= 5) {
        console.log(board);
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