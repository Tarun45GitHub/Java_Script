const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const preGuss = document.querySelector('.guesses');
const gussRemain = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessField = document.querySelector('#guessField');

let canPlay = true;
let countGuss = 1;

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const gussNumber = parseInt(guessField.value);
  // console.log(gussNumber);
  if (canPlay) {
    checkValid(gussNumber);
  }
  // } else winOrLoss('You loss the game !!Limit over');
});

function checkValid(gussNumber) {
  if (isNaN(gussNumber)) displayMassage('Enter valid Number');
  else if (gussNumber < 1 || gussNumber > 100)
    displayMassage('Enter a number between 1 and 100 ');
  else {
    if (countGuss <= 10) {
      startGame(gussNumber);
      displayGuss(gussNumber);
    } else canPlay = false;
  }
}

function startGame(gussNumber) {
  if (gussNumber == randomNumber) winOrLoss('Wow You win the game');
  else if (gussNumber < randomNumber) displayMassage('Your number is low');
  else if (gussNumber > randomNumber) displayMassage('Your number is high');
  if (countGuss == 10) winOrLoss('You loss the game !!Limit over');
}
const p = document.createElement('p');
function displayMassage(error) {
  p.innerText = error;
  p.style = 'color:red';
  lowOrHi.appendChild(p);
}

function displayGuss(gussNumber) {
  guessField.value = '';
  preGuss.innerHTML += `${gussNumber} ,`;
  countGuss++;
  gussRemain.innerText = `${11 - countGuss}`;
}
const resultParas = document.querySelector('.main');
function winOrLoss(massage) {
  div = document.createElement('div');
  div.classname = 'guesses';
  h2 = document.createElement('h4');
  h2.innerText = massage;
  btn = document.createElement('button');
  btn.innerHTML = '<p id="newgame"> start new game</p>';
  div.appendChild(h2);
  div.appendChild(btn);
  resultParas.replaceWith(div);
  newGame();
}

function newGame() {
  const newgame = document.querySelector('#newgame');
  newgame.addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
  });
}
