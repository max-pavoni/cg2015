function Bingo() {

	this.secretNumber = Math.ceil(Math.random()*10);

}

Bingo.prototype.guess = function(number) { 
                    return this.secretNumber === number; 
                 		}