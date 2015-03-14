//ESERCIZIO 1a

function Door() {

this.state = "closed";

}

Door.prototype.open = function() {this.state = "open"};

Door.prototype.close = function() {this.state = "closed"};

//ESERCIZIO 1b

function SecurityDoor() {
	Door.call(this);
	this.locked = false;
}

SecurityDoor.prototype = Object.create(Door.prototype);

SecurityDoor.prototype.open = function() {
								if(this.locked === true)
									return console.log("The door is locked!");
								else
									Door.prototype.open.call(this);
}

SecurityDoor.prototype.lock = function() {
								if(this.state === "closed")
									this.locked = true;
								else
									console.log("The door is still open!");
							}

SecurityDoor.prototype.unlock = function() {
								if(this.locked === true)
									this.locked = false;
							}








