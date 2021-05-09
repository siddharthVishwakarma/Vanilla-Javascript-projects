/*
Game function:-
- Player must guess a number between min and max.
- Player gets a certain ammount of guesses.
- Notify a player of guesses remains.
- Notify a player correct ans if local.
- Let player chose to play again.
*/

// Game Value
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);
    console.log(guess);

    // validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}.`, 'Red');
    } else {
        setMessage('Go on you can do it...', 'Blue')
    }
    
    // Check if won
    if(guess === winningNum){
        setMessage('You Win!!!','Green')
    } else {
        
    }

});

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
