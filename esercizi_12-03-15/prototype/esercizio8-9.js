//ESERCIZIO 8

function Point2D(x,y) {

	this.x = x;
	this.y = y;

}

var p1 = new Point2D(4,5);
console.log("Il punto 1 ha coordinate: x=" + p1.x + ", y=" + p1.y);
var p2 = new Point2D(-3,7);
console.log("Il punto 2 ha coordinate: x=" + p2.x + ", y=" + p2.y);

//ESERCIZIO 8a

function Edge(p1, p2) {

	this.p1 = p1;
	this.p2 = p2;

}

//ESERCIZIO 8b

function Edge(p1, p2) {

	this.p1 = p1;
	this.p2 = p2;
	
}

Edge.prototype.length = function() { return Math.sqrt(Math.pow((this.p2.x - this.p1.x),2) + Math.pow((this.p2.y - this.p1.y),2))};

var e1 = new Edge(p1,p2);

console.log("La distanza tra p1 e p2 e': " + e1.length());

//ESERCIZIO 9

function Triangle(e1,e2,e3) {

	this.e1 = e1;
	this.e2 = e2;
	this.e3 = e3;

}

Triangle.prototype.perimeter = function() {return this.e1.length() + this.e2.length() + this.e3.length()};

console.log("Lato 1: " + e1.length());

var e2 = new Edge(new Point2D(2,2), new Point2D(0,-4));

console.log("Lato 2: " + e2.length());

var e3 = new Edge(new Point2D(6,-3), new Point2D(7,-4));

console.log("Lato 3: " + e3.length());

t = new Triangle(e1, e2, e3);

console.log("Il perimetro del triangolo e': " + t.perimeter());

Triangle.prototype.area = function() {
							p = this.perimeter()/2;
							return Math.sqrt(p*(p-this.e1.length())*(p-this.e2.length())*(p-this.e3.length()))};

console.log("L'area del triangolo è: " + t.area());





