/*
Game function:-
- Player must guess a number between min and max.
- Player gets a certain ammount of guesses.
- Notify a player of guesses remains.
- Notify a player correct ans if local.  //todo:- spellcheck.
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

    //* validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}.`, 'Red');
    }
    
    // Check if won
    if(guess === winningNum){
        // Game over - Won!!!
        gameOver(true,`${winningNum} is correct, You Win!!!`);
    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game over - Lost!!!
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
            
        } else {
            // Game continues - answer wrong!!!

            // Change border color
            guessInput.style.borderColor = 'Red'
            // Clear input
            guessInput.value = ''
            // Set message
            setMessage(`Your ${guess} is not correct, ${guessesLeft} guesses left`, 'Blue')

        }     //todo:- make isnan function.
    }

});

// Game over
function gameOver(won, msg){
    let color;

    won === true ? color = 'Green' : color = 'Red';

    // Disable input
    guessInput.disabled = true;
    // Submit btn disable
    guessBtn.disabled = true;    //todo:- maybe have to remove.
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set Message
    setMessage(msg);
}

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

