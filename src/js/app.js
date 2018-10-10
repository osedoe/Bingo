const player = document.querySelector('.player');
const cpu = document.querySelector('.cpu');

const createCard = (classDiv) => {
    // Declare all necessary variables
    const parent = document.querySelectorAll(classDiv);
    // Create an array of 15 numbers
    let allNumbers = _.range(1, 91);
    let randomNumbers = _.shuffle(allNumbers)
    let boardNumbers = randomNumbers.slice(0, 15); // returns an array of 15 random numbers

    // We are going to iterate over the {array}boardNumbers and create each element in the html
    boardNumbers.forEach((element) => {
        let div = document.createElement('div');
        div.className = `number number${element}`;
        div.textContent = element;
        parent.appendChild(div);
    });
};


createCard('.player-board');