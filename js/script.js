const holes = document.querySelectorAll(".hole");
// console.log(holes);
const mole = document.querySelectorAll(".mole");
const endGame =document.getElementById("endBtn");
const startGame = document.getElementById("startBtn");
const scoreCounter = document.getElementById("score");
const timeCounter = document.getElementById("time")
let time = 10;
let score = 0;
let molePosition = 0;
let playing = false;

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
    moleTimer = setInterval(moveMole,375);
    gameTimer = setInterval(timer,1000);

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

//create Game Timer and stop timer at zero and end both mole and timer.//NOT WORKING-STOP TIME SHOWS -1 after CLEAR ALERT GAME OVER.
function timer(){
    time--;
    console.log(time)
    timeCounter.innerText = time;
    if ((time) <= 0) {
        alert("GAME OVER");
        clearInterval(gameTimer);
        clearInterval(moleTimer);
        
}
}
// (min,max) =>Math.random() * (max-min) + min;

//NOT WORKING: START TIME BUTTON create start function 
function startTime(){
    startBtn.addEventListener("click", startTime);
    startTime();
    playing = true;

}
//NOT WORKING, GAME NOT STOPPING!!! - create end function 
function endTime(){
    clearInterval(gameTimer);
    clearInterval(moleTimer);
    endTime();
endBtn.addEventListener("click", endTime);
playing = false;
}