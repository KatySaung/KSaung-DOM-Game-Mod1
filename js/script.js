const holes = document.querySelectorAll(".hole");
// console.log(holes);
const mole = document.querySelectorAll(".mole");
const endGame =document.getElementById("endGamebtn");
const startGame = document.getElementById("startbtn");
const cursor = document.getElementById("cursor");
const scoreCounter = document.getElementById("score");
let score = 0;
let molePosition = 0;


//NOT WORKING!!! - random time offset -use function declaration method arrow function
function time = 

// (min,max) =>Math.random() * (max-min) + min;

// document.querySelector('#score')
// document.querySelector('#time')

//WORKING-create function to move and remove mole randomly in holes and assign the current mole position to the current hole.
function moveMole(){
    holes.forEach((hole) => {
        hole.classList.remove("mole");
    });
    // console.log(Math.floor(Math.random() * 6)); 
    let randomHole = holes[Math.floor(Math.random() * 6)]; 
    randomHole.classList.add("mole");
    molePosition = randomHole.id;
  
}
// test function to moveMole();

//function to set speed and trigger mole to move randomly.
function speedMoveMole(){
    gameTimer = setInterval(moveMole,375);
}
speedMoveMole();

//function to click on the mole at current mole position and score points. NEED TO FIND WAY TO STOP CHEATING WITH MULTIPLE CLICKS.
holes.forEach((hole) => {
    hole.addEventListener("click", () =>{
        if (hole.id == molePosition){
            score++;
            scoreCounter.innerText = score;
            hole.classList.remove("mole");
        }
    });
});

// //create random function for the holes and random for mole popping out and disappearing.Clicks have to count when only selecting mole. Not anywhere on screen, prevent cheating
// function randomHole(holes){
//     let hole = holes[i]
//     for (let i =0; i<5; i++){
//         let i =  Math.floor(Math.random() * holes.length)
//         console.log(hole)
//     }
//     return{

//Create function of countdown. use setInterval

    //clear timer to reset 
    //create alert to user Game Over with player points
    //clear alert
