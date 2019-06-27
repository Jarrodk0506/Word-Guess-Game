$(document).ready(function(){

var answer = [             // The guessable word array
    "this",
    "is",
    "not",
    "coolio",
    "homie"
];



var tries = 10;         // How many lives the player has
var triesLeft;
var lettersGuessed = [];    // The array that stores the letters guessed.
var currentWord;
var guessingWord = [];  // The array that holds the correct letters guessed.
var wins = 0;
var guessesLeft =0;
var correct = false;
var gameEnd = false;   



currentWord = answer[Math.floor(Math.random() * answer.length)].toUpperCase(); // Picks the first random word from the array
triesLeft = tries;

for (var i=0; i < currentWord.length; i++){     // This for loop takes the picked word and replaces it with "_" 
    guessingWord.push("_");
}

console.log(currentWord);
console.log(guessingWord);






var guessedLetters = document.getElementById("letters");
document.onkeyup = function(event) {
          checkLetter(event.key.toUpperCase())
     }

     var lives = document.getElementById("lives").innerText = triesLeft; //Display "10" tries left
     var triesDisplay = lives;

     var word = document.getElementById("guess").innerText = guessingWord.join(" "); //Display The current word being guessed
     var wordDisplay = word;

     var winCount = document.getElementById("wins").innerText = wins; //Display wins

     function checkLetter(letter){
          var correctLetter = false;    //Function Checking if the letter is correct.
     
    

     for (var i=0; i < currentWord.length; i++){
          if (letter === currentWord[i]){             // if the letter is correct  
               guessingWord[i] = letter;
               correctLetter = true;
          }
               if(guessingWord.join("") === currentWord){
                    wins++
                    reset();
               }
     }

     if (!correctLetter){
          if(!lettersGuessed.includes(letter)){        // if the letter is incorrect check if its in the guessed
               lettersGuessed.push(letter);           // letters array. if it is not add it and display it.
               triesLeft--;
          }
          if(triesLeft === 0) {
               guessingWord = currentWord.split();  // Display correct word if you run out of tries.
          }
     }


guessedLetters.textContent = (event.key).toUpperCase();  // displays the key pressed
  var newH = $("<h1>");
  var x = lettersGuessed.toString();
  var y = x.toUpperCase();
  newH.text(y);
  $("#letters").append(newH);

     triesDisplay = document.getElementById("lives").innerText = triesLeft; // Displays remaining tries.
     wordDisplay = document.getElementById("guess").innerText = guessingWord.join(" ");   // Update guessing word _ with correct letter
     winsDisplay = document.getElementById("wins").innerText = wins; // Update wins 
};

function reset(){
     currentWord = answer[Math.floor(Math.random() * answer.length)].toUpperCase(); 
     console.log(currentWord);     //select a random word

     for (var i=0; i < currentWord.length; i++){     // This for loop takes the picked word and replaces it with "_" 
     guessingWord.push("_");
     
}

     triesLeft = tries;  // reset tries left

     lettersGuessed = [];     // reset arrays
     guessingWord = [];

     triesDisplay = document.getElementById("lives").innerText = triesLeft; // Displays remaining tries.
     wordDisplay = document.getElementById("guess").innerText = guessingWord.join(" ");   // Update guessing word _ with correct letter
     winsDisplay = document.getElementById("wins").innerText = wins; // Update wins 


}



});
