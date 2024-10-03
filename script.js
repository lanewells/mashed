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

    const home = ['mansion', 'apartment', 'shack', 'house'] 
    const place = board.slice(0, 4)
    const career = board.slice(4, 8)
    const partner = board.slice(8, 12)
    const car = board.slice(12, 16)

    const categories = [home, place, career, partner, car]

    let currentIndex = 0
    console.log("Initial categories:", categories)

    while (categories.some(category => category.length > 1)) {
        let flatBoard = categories.flat()

        let strike = (currentIndex + (number - 1)) % flatBoard.length

        let totalLength = 0
        let categoryToStrike 
        for (let i = 0; i < categories.length; i++) {
            totalLength += categories[i].length
            if (strike < totalLength) {
                categoryToStrike = i
                break
            }
        }
        
        if (categories[categoryToStrike].length > 1) {
            let relativeStrike = strike - (totalLength - categories[categoryToStrike].length)
            let item = categories[categoryToStrike].splice(relativeStrike, 1)
            console.log(`striking from category${categoryToStrike}, removing:${item}`)
        }

        currentIndex = strike % flatBoard.length
    }
        let finalValues = categories.map(category => category[0])
        console.log("final values from each category:", finalValues)
        
        // const finalHome = finalValues[0]
        // const finalPlace = finalValues[1]
        // const finalCareer = finalValues[2]
        // const finalPartner = finalValues[3]
        // const finalCar = finalValues[4]

        // screen1.style.display = 'none'
        // screen2.style.display = 'inherit'
        // predictionText.textContent = `After graduating from school to become a ${finalCareer}, you accept a job offer in ${finalPlace} and begin your career.  There, you marry your best friend ${finalPartner} and buy a ${finalHome} together.  You love your life, and you and ${finalPartner} drive the ${finalCar} off into the sunset.`
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
predictButton.addEventListener('click', () => predict())