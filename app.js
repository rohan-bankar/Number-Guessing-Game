let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userNumber = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numbGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userNumber.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
if(isNaN(guess)){
    alert('Please enter valid Number');
}else if(guess < 1){
    alert('Please enter number more than 1');
}else if(guess > 100){
    alert('Please enter number smaller than 100');
}else{
    prevGuess.push(guess);
    if(numbGuess === 11){
        displayGuess(guess);
        displayMessage(`Game over. Random number was ${randomNumber}`);
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
}
}

function checkGuess(guess){
if(guess === randomNumber){
    displayMessage(`Your guess is Right`);
    endGame();
}else if(guess < randomNumber){
    displayMessage(`Number is Too smaller`);
}else if(guess > randomNumber){
    displayMessage(`Number is Too bigger`);
}
}

function displayGuess(guess){
    userNumber.value = '';
    guessSlot.innerHTML +=`${guess}, `;
    numbGuess++;
    remaining.innerHTML = `${11 - numbGuess}`;
}

function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
userNumber.value = '';
userNumber.setAttribute('disabled', '');
p.classList.add('button');
p.innerHTML = `<h2 id="newGame"> Start new Game <h2>`;
startOver.appendChild(p);
playGame = false;
newGame();
}

function newGame(){
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numbGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numbGuess}`;
    userNumber.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
});
}