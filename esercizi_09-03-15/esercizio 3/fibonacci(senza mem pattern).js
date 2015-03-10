function fibonacci(n) {
	var i, ultimo, penultimo;
	var k = 1;
	penultimo =1;
	ultimo = 1;
	if(n==1 || n ==2) 
	return console.log(1); 
	for(i=1; i<=n-2; i++) {
	k = penultimo + ultimo;
	penultimo = ultimo;
	ultimo = k;
	}
console.log("L'i-esimo elemento e': " + k);
}

console.log(fibonacci(9));