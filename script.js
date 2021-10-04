const button = document.getElementById("wordButt");
var words = ['capybara', 'toenail', 'flower', 'computer', 
'shuttle', 'boolean', 'cigarette', 'hospital', 'ceremony',
'animate', 'raspberry'];

var word = ' '; //word type is string

const statement = document.getElementById('statement');
const stateTime = document.getElementById('stateTime')

//user text input
const input = document.getElementById('inputBox');
input.addEventListener('input', updateValue);

function updateValue(e) {
  userTextContent = e.target.value;
  if (userTextContent==word) {
    console.log("DONE_____")
    win();
  };
}

//end user text input

//win condition
function win(){
  stop();
  statement.style.color = 'green';
  input.style.borderBottom = '5px solid springgreen';
  var endTime = time;
  for (i in leaderboard.boolean) {
    if (endTime < leaderboard.boolean[i]) {
      //leaderboard.boolean.unshift()
      leaderboard.boolean.splice(i, 0, endTime);
      break;
    }
  if (leaderboard.boolean.length > 10) {
    leaderboard.boolean.pop();
    console.log(leaderboard.boolean);
    }
  document.body.table.appendChild(newScoreData);
  document.body.table.newScoreData.appendChild(scoreName)
  }
}
//end win

var time = 0; 

var timer = null; //timer on or off (uses setInterval and clear)

function start() {
  time = 0;
  timer = setInterval(function(){
    time += 0.01;
    displayTime = time.toFixed(2)
    console.log(time.toFixed(2));
    stateTime.textContent =  displayTime + ' seconds';
  }, 10);
}

function stop() { //end timer
  clearInterval(timer); 
}

const wordHolder = document.getElementById('wordText'); //for CSS changes

function getWord() {
  var wordIndex = Math.floor(Math.random() * words.length);
  var word = words[wordIndex];
  return word;
}

function startGame(evt) {
  word = getWord();
  button.disabled=true;
  wordHolder.innerHTML='get ready...';
  wordHolder.style.color = '#a8a8a8'; 
  input.value = '';
  input.style.borderBottom = '5px solid gray';
  stateTime.textContent =  '0.00 seconds';
  statement.style.color = 'black';
  inputBox.focus();
  stop();
  setTimeout(function() {
    button.disabled=false;
    console.log(word);
    wordHolder.innerHTML = word;
    wordHolder.style.color='green';
    start();
  }, 2000);
  return word;
}

//alternative way to start game (key press ENTER)
window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Enter') {
    startGame();
  }
});

//button click to start the game
button.onclick = startGame;

//leaderboard dictionary
var leaderboard = {
  boolean: Array(10).fill(10.00),
  flower: Array(10).fill(10.00),
  ceremony: Array(10).fill(10.00),
};

console.log(leaderboard.flower)

//leaderboard stuff UNFINISHED DOES NOT WORK

var newScoreData = document.createElement("tr")
var scoreName = document.createElement('td')
scoreName.innerText = "tested";