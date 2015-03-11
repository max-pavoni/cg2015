//ESERCIZIO 2a:

function random_numbers(n) {
var i;
var arr = [];
for (i=0; i<n; i++) {
	arr.push(Math.floor(100*Math.random()));
}
return arr;
}

//ESERCIZIO 2b:

function dispari(arr) {

var disp = arr.filter(function(item) {
	return item%2 != 0;

});
return disp;
}

//ESERCIZIO 2c:

function compare(val1, val2) {
	return val1 - val2;
}

function ordina(arr) {

var ordinati = arr.sort(compare);
return ordinati;
}
