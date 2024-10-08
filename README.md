### LANE WELLS

# MASHED
[Play Mashed](https://mashed.surge.sh/)

![Paper Game](https://birminghammomcollective.com/wp-content/uploads/2020/02/86453559_603831930460614_1250635038542790656_n.jpg)

#### Sleepovers, long phone calls on your parents' landline, giggling with your bffs at recess. Revisit that sweet time when the only taxes you paid were with Monopoly money, with MASHED!

## Game Overview
This game is based on a legendary schoolyard game called MASH, in which players (or player) picks categories and values based on what they want in their future story, find their "magic number," and use a particular sequence based off their magic number to begin eliminating values until one from each category remains. The last standing values compose their future story.

## Instructions for Gameplay
  - Title your page with “MASH” to begin. This will predict if you will live in a mansion, apartment, shack, or house.
  - Choose your categories based on what you want in your future or story: a partner, kids, car, college, pets, etc.
  - List 4 values for each category. Some variations include one player determining 2 values for themselves, and another player or players determining the other 2 values.
  - Select your magic number. This can be done through drawing a spiral until someone tells you to stop and counting the rings, or a dice roll, etc.
  - Begin eliminating by looping through the values and striking off the nth number, and repeating from the last spot stricken. 
  - Tell a story with your remaining values from each category.

## Demo
User fills out 16 fields and rolls dice. Roll dice function generates a pseudorandom innteger between 1 and 2, inclusive.
```js
function rollDice() {
    number = (Math.floor(Math.random() * 12) + 1)
    magicNumber.textContent = number
    predictButton.disabled = false
}
```
![Landscape](/assets/Screenshot1.png)
Predict function begins sequence of removing values from nested arrays
```js
function predict() {
  ///lines 38-79
```
![Landscape2](/assets/Screenshot3.png)

![Landscape3](/assets/Screenshot4.png)
New screen appears through DOM changing the values of display properties of divs, which are assigned id values of '#screen1' and '#screen2'.
```html
<div id="screen2" class="group">
```
```css
#screen2 {
    display: inherit;
    margin: 80px auto;
    line-height: 30px;
}
```
```js
function showScreen2() {
    screen1.style.display = 'none'
    screen2.style.display = 'flex'
}
```
![Landscape4](/assets/Screenshot2.png)

## Mobile
I used flexbox displays in CSS for responsiveness to different screen sizes and to adapt for mobile gameplay.
```css
.group, .field {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    gap: 3px;
}
.row {
    display: inline-flex;
    flex-direction: row;
    gap: 7px;
}
```
![Mobile](/assets/Mobile1.png){width=300}

The Roll Dice button is disabled until all input fields have been typed in by user.

![Mobile2](/assets/Mobile2.png){width=300}

The Predict button is only enabled once the Roll Dice button has been clicked and generated a magic number.

![Mobile3](/assets/Mobile3.png){width=300}

## Wireframes
#### Miro as a wireframing platform
![Wireframe1](/assets/Wireframes1.png)

![Wireframe2](/assets/Wireframes2.png)

#### Mapping & pseudocoding the game logic
![Map](/assets/Map.png)

### Other Notes
I used a specific font family via Google Fonts through importing to my CSS file.
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
```

#### Citations
  - [Wikihow: basic instructions](https://www.wikihow.com/Play-M.A.S.H)
  - [W3 Schools: DOM methods](https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp)