//ESERCIZI 10 MARZO:

//ESERCIZIO 1a:

function pusha(n) {

	var i;
	var a = [];
	for(i=1;i<=n; i++) {
		a.push(i);
	}
return a;
}

//ESERCIZIO 1b:

a = [1,2,3,4,5,6,7,8];

function solo_pari(arr) {
var ris = arr.filter(function(item) {
	return (item%2 === 0);
}
return ris;
}

//ESERCIZIO 1c:

function raddoppia(arr) {

var doppio = arr.map(function(item) {return 2*item;});
return doppio;
}

//ESERCIZIO 1d:

function divisibili_per_quattro(arr) {
var ris = arr.filter(function(item) {
	return (item%4 === 0);
}
return ris;
}

//ESERCIZIO 1e:

function somma(arr) {
	var sum = arr.reduce(function(prev, cur, index, array){
 return prev + cur;
});
return sum;
}