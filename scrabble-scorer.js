// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("\nLet's play some Scrabble!");
   word = input.question("Enter a word to score:");
   return word
};

let simpleScore = function (word) {
  let points = word.length
  return points
}; 

let vowelBonusScore = function (word){
let vowels = ["a", "e", "i", "o", "u"]
let points = 0 
  for (let i = 0; i < word.length; i++){ 
    if (vowels.includes(word[i])){
    points += 3;
    } else {
    points += 1;
    }
  }
return points
};


let scrabbleScore = function (word){
  word = word.toUpperCase();
  let points = 0;
  for (let i = 0; i < word.length; i++){
  points += newPointStructure[word[i]];
  }
  return points 
};

const newScrabbleScoreObject = {
  name: "Scrabble",
  description: "The traditional scoring algorithm",
  scoringFunction: scrabbleScore,
};

const scrabbleScoreObject = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: oldScrabbleScorer
};

const simpleScoreObject = {
  name: "Simple Score",
  description: "All letters are worth one point.",
  scoringFunction: simpleScore,
};

const vowelBonusScoreObject = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore,
};

const scoringAlgorithms = [simpleScoreObject, vowelBonusScoreObject, newScrabbleScoreObject];

function scorerPrompt() {
 console.log("\nWhich scoring algorithm would you like to use? \n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system");
 let scoreChoice = input.question("Enter 0, 1, or 2: ");
   if (scoreChoice == "0") { 
      console.log("\nYou have chosen 0: Simple Score");
    } else if (scoreChoice == "1") {
      console.log("\nYou have chosen 1: Vowel Bonus");
    } else if (scoreChoice == "2") {
      console.log("\nYou have chosen 2: Scrabble Score");
    }
    return scoreChoice;
}

function transform(object) {
  const transformObject = {}
for (item in object){
  numberOld = item;
  arr = object[item];
  for (item in arr){
   transformObject[arr[item]]=Number(numberOld);
  }
}
return transformObject;
}

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   let scoreChoice = scorerPrompt(); 
     if (scoreChoice == "0"){
     console.log(`Score for ${word}: ${scoringAlgorithms[0].scoringFunction(word)}`)
     } else if (scoreChoice == "1"){
     console.log(`Score for ${word}: ${scoringAlgorithms[1].scoringFunction(word)}`)  
     } else if (scoreChoice == "2"){
     console.log(`Score for ${word}: ${scoringAlgorithms[2].scoringFunction(word)}`)
     }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};