function fibonacci(n) {
	var i;
	fibonacci[1] = 1;
	fibonacci[2] = 1;
	if(n==1 || n ==2) 
	return 1; 
	for(i=3; i<=n; i++) {
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
	}
console.log("L'i-esimo elemento e': " + fibonacci[n]);
}

console.log(fibonacci(9));