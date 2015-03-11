function random1() {

var a = [];

for(var i =0; i<3; i++) 
a.push(Math.round(Math.random()*100));

a.sort(compare);
console.log(a);
console.log(a[a.length-1]);
}

function compare(val1, val2) {
	return val1 - val2;
}