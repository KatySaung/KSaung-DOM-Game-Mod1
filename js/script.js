/*Your dom project must meet these requirements:
1-If you build a you Game must have::
    a-Must be a two player game.
    b-A win state(High Score) 
    c-A lose state.
    d-A way to keep playing if the game is not over.
    e-Multiple rounds to play: A round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost 
Extra 1: A way to Reset and Play Again.
Extra 2: CSS to give your game a personal and fun style
Extra 4: Audio
Extra 5: MAKE LEVELS for each continued round
*/

const holes = document.querySelectorAll('hole')
const mole = document.querySelectorAll('mole')
const cursor = document.querySelector('cursor')

//NOT WORKING!!! - random time offset -use function declaration method arrow function
const randomTime = (min,max) =>Math.random() * (max-min) + min;

document.querySelector('#score')
document.querySelector('#time')

//Global variables
let result;
let time;


//Set 2 functions to the Start button: start game and start loop for alien-mole
function startGame(){

    startBtn.addEventListener('click', () =>{
        const startBtn = document.getElementById('startBtn')
        alert('Start button clicked')

    })
    holes.forEach(hole => hole.addEventListener("click",randomHole));
    console.log("Game has started")
}


const newGameBtn = document.getElementById('newGameBtn')
function newGame(){
    newGameBtn.addEventListener('click',() =>{       
    })
}

//create random function for the holes and random for mole popping out and disappearing.Clicks have to count when only selecting mole. Not anywhere on screen, prevent cheating
function randomHole(holes){
    let hole = holes[i]
    for (let i =0; i<5; i++){
        let i =  Math.floor(Math.random() * holes.length)
        console.log(hole)
    }
    return{

    }
}
//create function for Eventlistener in a different function from for mouse click on the squares. Use loop for moving through all the holes and if statement for if hit on mole at the hole add points to the score
//holes.forEach
    holes.addEventlistener('clicked', () => {
        //if statement
        //score and result
    })


//Create function for timer of mole movement.Set on timer for how fast mole will move to each hole and attach the function to Start button.
function moveMole(){
   
    //create variable for timer and use setInterval for the holes. put an ID to variable so can assign to Start button
   
}
//call the randomMole function here and test on DOM
moveMole()

//Create function of countdown. use setInterval
function time(){
    //clear timer to reset 
    //create alert to user Game Over with player points
    //clear alert
}