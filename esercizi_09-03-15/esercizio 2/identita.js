function identity(n) {
	var i,j;
	for (i=1; i<=n; i++) {
		var riga = "";
		for(j=1; j<=n; j++) {
		if(i==j) {
		riga += "1";
		}
		else riga += "0";
		}
	console.log(riga);
	}
}

console.log(identity(6));