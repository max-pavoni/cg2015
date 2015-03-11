function random4() {

var k = Math.round(Math.random()*100);
console.log("k e': " + k);
var a = [];

for(var i=0; i<k; i++) {

a.push(Math.round(Math.random()*100));

}

a.sort(compare);
console.log("L'array e': " + a);
console.log("Il numero piu grande e': " + a[a.length-1]);

}

function compare(val1, val2) {
	return val1 - val2;
}