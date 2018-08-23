var Letter = require("./letter");
var inquirer = require("inquirer");


var Word = function(value) {
    
    this.letterArray = [];

    for (let i = 0; i<value.length; i++)
        {
            this.letterArray[i] = new Letter(value[i])
        }

    this.printWord = function() {
        
        var word = ''

        for (let i = 0; i<this.letterArray.length; i++)
        {
            
            word = word +" "+ this.letterArray[i].toString();
        }

        return word
    }

    this.guessLetter = function(guess) {
        
            for (let i = 0; i<this.letterArray.length; i++)
            {
                this.letterArray[i].checkGuess(guess);
            }

            
        }
    
}

module.exports = Word;