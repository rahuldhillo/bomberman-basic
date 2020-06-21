//Data Structure
var score;
var cellStatus = [];
var bombCells = new Set();

//Functions
function startGame() {

  document.getElementById("game-area").innerHTML= "" ;

  score = 0;

  let scoreEle = document.createElement("div");
  scoreEle.innerText = "Score: " + score;
  scoreEle.className = "scoreEle";
  scoreEle.id = "score";
  document.getElementById("game-area").appendChild(scoreEle);

  var id = 0 ;

  for(let i = 0; i<81; i++)
  cellStatus.push(0);

  generateRandom();
  console.log(bombCells);

  for(let i=0; i<9; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for(let j=0; j<9; j++) {
      let col = document.createElement("div");
      col.className = "col";
      col.id = id;
      col.onclick = () => {updateScore(col.id)};
      id++;
      row.appendChild(col);
    }
    document.getElementById("game-area").appendChild(row);
  }
}

function updateScore(id) {
  if(cellStatus[id] == 0) {
    console.log(id);
    document.getElementById(id).style.background = "#79d70f";
    cellStatus[id] = 1;
    score +=5;
    document.getElementById("score").innerText = "Score: " + score;
    console.log(score);

  }
  else if(cellStatus[id] == 1) {
    document.getElementById(id).style.background = "#79d70f";
    return;
  }
  else {
    document.getElementById(id).style.backgroundColor = "#d32626";
    message(id);
    return;

  }

}

function message(id) {
  cellStatus[id] = -1;
  let flag = confirm("It's a bomb :(. Game Over!!. Click 'ok' or cancel to Restart Game?)")
  startGame();
}

function generateRandom() {
  while(bombCells.size < 10) {
    let index = Math.floor(Math.random()*81);
    bombCells.add(index);
  }

  bombCells.forEach(idx => {
    cellStatus[idx] = -1;
  });

}

startGame();
