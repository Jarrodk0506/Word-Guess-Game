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


currentWord = answer[Math.floor(Math.random() * answer.length)]; // Picks the current word from the array
    
for (var i=0; i < currentWord.length; i++){     // This for loop takes the picked word and replaces it with "_" 
    guessingWord.push("_");
}

console.log(guessingWord);

var targetDiv = document.getElementById("guess");

for (var d = 0; d < answer.length; d++){
    var newDiv = document.createElement("p")
     newDiv.innerHTML = guessingWord[i];
     targetDiv.appendChild(newDiv);
}




