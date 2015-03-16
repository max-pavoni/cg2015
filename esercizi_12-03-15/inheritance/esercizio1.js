//ESERCIZIO 1a

//se non viene riconosciuto il parametro passato, state viene settato a closed
function Door(state) {

this.state = state || "closed";

}

Door.prototype.open = function() {this.state = "open"};

Door.prototype.close = function() {this.state = "closed"};

//ESERCIZIO 1b

function SecurityDoor(state) {
	Door.call(this, state);
	this.locked = false;
}

SecurityDoor.prototype = Object.create(Door.prototype);
SecurityDoor.prototype.constructor = SecurityDoor;

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








