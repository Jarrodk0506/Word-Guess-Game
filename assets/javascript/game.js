var answer = [             // The guessable word array
    "this",
    "is",
    "not",
    "coolio",
    "homie"
];



var tries = 10;         // How many lives the player has

var lettersGuessed = [];    // The array that stores the letters guessed.
var currentWord;
var guessingWord = [];  // The array that holds the correct letters guessed.
var wins = 0;
var guessesLeft =0;
var correct = false;
var gameEnd = false;   



currentWord = answer[Math.floor(Math.random() * answer.length)].toUpperCase(); // Picks the current word from the array
    
for (var i=0; i < currentWord.length; i++){     // This for loop takes the picked word and replaces it with "_" 
    guessingWord.push("_");
}

console.log(currentWord);
console.log(guessingWord);



for (var d = 0; d < 1; d++){
     var newH = $("<h1>");  
     var x = guessingWord.toString();             
     newH.text(x);            
     $("#guess").append(newH); 
}



var guessedLetters = document.getElementById("letters");
document.onkeyup = function(event) {
guessedLetters.textContent = event.key;  // displays the key pressed
lettersGuessed.push(event.key);
  var newH = $("<h1>");
  var x = lettersGuessed.toString();
  newH.text(x);
  $("#letters").append(newH);
};



var lives = document.getElementById("lives");
    for(var l = 0; l < 1; l++){
         var newH = $("<h1>");
         newH.text("Lives left =" + tries);
          $("#lives").append(newH);
    }

var score = document.getElementById("wins");
    for(var l = 0; l < 1; l++){
         var newH = $("<h1>");
         newH.text("Wins = " + wins);
          $("#wins").append(newH);
    }

