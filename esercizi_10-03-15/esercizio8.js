function random3() {

var k = Math.round(Math.random()*100);
console.log("Il numero random e': " + k);
var output = "";

if(k >=40) {
for(var i=40; i<=k; i++) {

	if(i%2 != 0) {
	output += i + " ";
	}

}
}
else {

for(var i=40; i>=k; i--) {

	output += i + " ";

}

}

return output;
}