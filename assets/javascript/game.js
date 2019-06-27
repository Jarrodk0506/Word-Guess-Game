$(document).ready(function(){

var answer = [             // The guessable word array
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "Pluto"
];



var tries = 10;         // How many lives the player has
var triesLeft;
var lettersGuessed = [];    // The array that stores the letters guessed.
var currentWord;
var guessingWord = [];  // The array that holds the correct letters guessed.
var wins = 0;
var guessesLeft =0;
var correct = false;




currentWord = answer[Math.floor(Math.random() * answer.length)].toUpperCase(); // Picks the first random word from the array
triesLeft = tries;

for (var i=0; i < currentWord.length; i++){     // This for loop takes the picked word and replaces it with "_" 
    guessingWord.push("_");
}

console.log(currentWord);
console.log(guessingWord);






document.onkeyup = function(event) {
          checkLetter(event.key.toUpperCase())
     }

     var lives = document.getElementById("lives").innerText = triesLeft; //Display "10" tries left
     var triesDisplay = lives;

     var correctWord = document.getElementById("guess").innerText = guessingWord.join(" "); //Display The current word being guessed
     var wordDisplay = correctWord;

     var winCount = document.getElementById("wins").innerText = wins; //Display wins

     var guessingLetters = document.getElementById("letters").innerText = lettersGuessed.join(" "); //Display letters guessed
     var guessedLettersDisplay = guessingLetters;

     function checkLetter(letter){
          var correctLetter = false;    //Function Checking if the letter is correct.
     
    

     for (var i=0; i < currentWord.length; i++){
          if(typeof letter == 'string'){
          
               if (letter === currentWord[i]){             // if the letter is correct  
                    guessingWord[i] = letter;
                    correctLetter = true;
               }
                    if(guessingWord.join("") === currentWord){
                         wins++
                         reset();
                    }
          }
     }

     if (!correctLetter){
          if(!lettersGuessed.includes(letter)){        // if the letter is incorrect check if its in the guessed
               lettersGuessed.push(letter);           // letters array. if it is not add it and display it.
               triesLeft--;
          }
          if(triesLeft === 0) {
               guessingWord = currentWord.split();  // Display correct word if you run out of tries.
               restart();
               alert("Game over. Click to start over");
          }
     }


     triesDisplay = document.getElementById("lives").innerText = triesLeft; // Displays remaining tries.
     wordDisplay = document.getElementById("guess").innerText = guessingWord.join(" ");   // Update guessing word _ with correct letter
     winsDisplay = document.getElementById("wins").innerText = wins; // Update wins 
     guessedLettersDisplay = document.getElementById("letters").innerText = lettersGuessed.join(" "); // display guessed letters
};

function reset(){
     currentWord = answer[Math.floor(Math.random() * answer.length)].toUpperCase(); // select a random word from the array 
         

     triesLeft = tries;  // reset tries left

     lettersGuessed = [];     // reset arrays
     guessingWord = [];

     for (var i=0; i < currentWord.length; i++){     // This for loop takes the picked word and replaces it with "_" 
     guessingWord.push("_"); 
     }
     console.log(currentWord);  
     console.log(guessingWord);  


     triesDisplay = document.getElementById("lives").innerText = triesLeft; // Displays remaining tries.
     wordDisplay = document.getElementById("guess").innerText = guessingWord.join(" ");   // Update guessing word _ with correct letter
     winsDisplay = document.getElementById("wins").innerText = wins; // Update wins 
     guessedLettersDisplay = document.getElementById("letters").innerText = lettersGuessed.join(" ");
}

function restart(){

     currentWord = answer[Math.floor(Math.random() * answer.length)].toUpperCase(); // select a random word from the array 
         

     triesLeft = tries;  // reset tries left

     lettersGuessed = [];     // reset arrays
     guessingWord = [];

     for (var i=0; i < currentWord.length; i++){     // This for loop takes the picked word and replaces it with "_" 
     guessingWord.push("_"); 
     }
     console.log(currentWord);  
     console.log(guessingWord);  

     wins = 0;      //reset wins to 0

     triesDisplay = document.getElementById("lives").innerText = triesLeft; // Displays remaining tries.
     wordDisplay = document.getElementById("guess").innerText = guessingWord.join(" ");   // Update guessing word _ with correct letter
     winsDisplay = document.getElementById("wins").innerText = wins; // Update wins 
     guessedLettersDisplay = document.getElementById("letters").innerText = lettersGuessed.join(" ");
}

function letterCheck(ch){

}


});
