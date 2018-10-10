let _ = require('lodash');

// Variables
const player = document.querySelector('.player');
const cpu = document.querySelector('.cpu');
const rollBtn = document.querySelector('#roll');
const screen = document.querySelector('#screen');
const balls = _.shuffle(_.range(1, 91));

let arrayPlayer = [];
let arrayCpu = [];
/**
 * Create an array of 15 numbers
 */
const generate15RandomNumbers = () => {
    let allNumbers = _.range(1, 91);
    let randomNumbers = _.shuffle(allNumbers);
    return randomNumbers.slice(0, 15); // returns an array of 15 random numbers
};

// Generate a random number between 1 and 99
const getRandomNumber = () => balls.pop();



/**
 * Create a card with 15 numbers in it
 * @param {DOM element div} classDiv - parent container 
 */
const createCard = (classDiv) => {
    // Declare all necessary variables
    let parent = document.querySelector(classDiv);
    let boardNumbers = generate15RandomNumbers();
    // We are going to iterate over the {array}boardNumbers and create each element in the html
    boardNumbers.forEach((element) => {
        let div = document.createElement('div');
        div.className = `number number${element}`;
        div.textContent = element;
        parent.appendChild(div);
    });
    return boardNumbers;
};

const crossNumber = (number) => {
    let classNumberName = `.number${number}`;
    let numberToCross = document.querySelectorAll(classNumberName);
    for (let i = 0; i < numberToCross.length; i++) {
        numberToCross[i].classList.add('crossed');
    }
    _.pull(arrayPlayer, number);
    _.pull(arrayCpu, number);
};

const checkWinner = () => {
    if (arrayPlayer.length == 0 && arrayCpu.length == 0) {
        alert('Draw!');
    } else if (arrayPlayer.length == 0) {
        alert('You win!');
    } else if (arrayCpu.length == 0) {
        alert('You lose!');
    }
}

rollBtn.addEventListener('click', () => {
    let number = getRandomNumber();
    screen.textContent = number;
    crossNumber(number);
    // check winner
    checkWinner();
    // comprobar empate
});

arrayPlayer = createCard('.player-board');
arrayCpu = createCard('.cpu-board');