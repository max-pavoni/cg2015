function random2() {

var k = Math.round(Math.random()*100);
console.log("Il numero random e': " + k);
var output = "";
for(var i=0; i<=k; i++) {

	if(i%2 === 0) {
	output += i + " ";
	}

}
return output;
}