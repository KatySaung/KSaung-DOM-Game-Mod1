const holes = document.querySelectorAll(".hole");
// console.log(holes);
const mole = document.querySelectorAll(".mole");
const endGame =document.getElementById("#endBtn");
const startGame = document.getElementById("#startBtn");
const scoreCounter = document.getElementById("score");
const timeCounter = document.getElementById("time")
let time = 10;
let score = 0;
let molePosition = 0;
let gameStart = false;

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
    score = 0;
    time = 10;
    moleTimer = setInterval(moveMole,500);
    gameTimer = setInterval(timer,1000);
   
} 


//function to click on the mole at current mole position and score points. NEED TO FIND WAY TO STOP CHEATING WITH MULTIPLE CLICKS.
holes.forEach((hole) => {
    hole.addEventListener("click", () =>{
        if (hole.id == molePosition){
            score++;
            scoreCounter.innerText = score;
            if (score === 1){
                alert ("YOU got " + score +"!"+ " YOU ARE AWESOME. YOU WIN. You can continue or click Restart and then Start for a new game. Thanks for playing!");
            }
            hole.classList.remove("mole");
 } })
    
});

//Game Timer and stop timer at zero and end both mole and timer.
function timer(){
    time--;
    console.log(time)
    timeCounter.innerText = time;
    if ((time) <= 0) {
        alert("GAME OVER. Your score is " + score +"!" + " That's Awesome Sauce!");
        clearInterval(gameTimer);
        clearInterval(moleTimer);    
    }  
}

//Click Start Button to Start Game
function startTime(){
    
    if (!gameStart){
        speedMoveMole();
        gameStart = true;
    }
}
startBtn.addEventListener("click", startTime);

//Click End Button to Stop Game
function endTime(){
    clearInterval(gameTimer);
    clearInterval(moleTimer); 
}
endBtn.addEventListener("click", endTime);

//Click Restart Button to start new game
function reStartTime(){
    window.location.reload();
}
reStartBtn.addEventListener("click",reStartTime);