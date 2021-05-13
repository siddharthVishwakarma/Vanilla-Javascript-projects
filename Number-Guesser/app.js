/*
Game function:-
- Player must guess a number between min and max.
- Player gets a certain ammount of guesses.
- Notify a player of guesses remains.
- Notify a player correct ans if loose.  
- Let player chose to play again.
*/

// Game Value
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
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

// Play again event listener
game.addEventListener('mousedown', (e) => {
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// Listen for guess
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);
    console.log(guess);

    // validate
    if (isNaN(guess) || guess < min || guess > max) {
        //todo:- handel a guesses left.
        setMessage(`Please enter a number between ${min} and ${max}.`, 'Red');
    } else {
        // Game continues - answer wrong!!!

        // Change border color
        guessInput.style.borderColor = 'Red'
        // Clear input
        guessInput.value = ''
        // Set message
        setMessage(`Your ${guess} is not correct, ${guessesLeft} guesses left`, 'Blue')

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
            
        } 
    }

});

// Game over
function gameOver(won, msg){
    let color;

    won === true ? color = 'Green' : color = 'Red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set Message
    setMessage(msg);

    // Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get winning num
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

