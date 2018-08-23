var Letter = function(value) {
    this.value = value
    this.display = false;

    this.toString = function() {
        
        var toDisplay ='';
      
        if (!this.display) 
            toDisplay = "_"

        else
            toDisplay = this.value

        return toDisplay;
    };

    this.checkGuess = function(guess) {
        if(guess===this.value)
            this.display = true

        this.toString();
    }

    
}

module.exports = Letter;

