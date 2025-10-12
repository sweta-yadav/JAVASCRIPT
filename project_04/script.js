let randomNumber=parseInt(Math.random()*100+1);

const guessSlot=document.querySelector('.guesses')
const userInput=document.querySelector('#guessField');
const submit=document.querySelector('#subt');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
const remaining=document.querySelector('.lastResult');


const p =document.createElement('p')
let prevGuess=[]
let numGuess=1

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
    alert('please enter a valid number');
    }
else if(guess < 1 ){
    alert('please enter a  number more than 1')
}
else if(guess>100){
    alert('please enter a number less than 100')

} else{
    prevGuess.push(guess)
    if(numGuess==11){
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endgame();
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`congratulations! you guessed it right`)
        endgame();
    }
        else if(guess <randomNumber){
            displayMessage(`your guess is too low`)
    }
    else if(guess >  randomNumber){
        displayMessage(`your guess is too high`)
    }
}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML += `${guess},   ` ;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}


function endgame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=10;
        lowOrHi.innerHTML='';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;


    });



}