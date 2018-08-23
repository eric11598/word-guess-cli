var Word = require("./word"); 
var randomWords = require('random-words');
var inquirer = require("inquirer");

var randomWord = randomWords();
var target = new Word(randomWord)

var guessNumber = 10;

function play(){

    if (guessNumber === 0)
    {
        console.log("game over! The word was "+randomWord)
        if(!playAgain())
            return
    }

    if(guessNumber === 10)
        {
            console.log(target.printWord());
            
        }
    inquirer.prompt([
        {
        name: "guess",
        message: "What is your guess? you have "+guessNumber+" remaining",
        validate: function validateGuess(name){
        
            var letters = /^[A-Za-z]+$/;

            if(!name.match(letters)||name.length>1)
                return 'Please enter 1 valid letter'
            else
                return true 
        }
        }
    ]).then(function(answers) {
        guessNumber--;
        target.guessLetter(answers.guess)
        var x = target.printWord();

        if(x.includes("_"))
        {
            console.log(x)
            play();
        }
        else
            {
                console.log("You got it! The word was "+x)
                playAgain()
                
            }
    });

}

function playAgain(){

    inquirer.prompt([
        {
          type: "confirm",
          message: "Play again?",
          name: "confirm",
          default: true
        }
      ])
      .then(function(inquirerResponse) {
    
        if (inquirerResponse.confirm) {
            randomWord = randomWords();
            target = new Word(randomWord)

            guessNumber = 10;
            play();
        }
        else {
          console.log("Good game!");
          return false
        }
      });
}

play();



