function mcd() {

a = Math.round(Math.random()*100);
b = Math.round(Math.random()*100);

console.log("Il primo numero e': " + a);

console.log("Il secondo numero e': " + b);
var i;
for(i=2; i<=Math.min(a,b); i++) {

	if(a%i === 0 && b%i === 0)
		return console.log("Il mcd e': " + i);

}

console.log("Non esiste un mcd tra i due numeri che sia diverso da 1!");

}