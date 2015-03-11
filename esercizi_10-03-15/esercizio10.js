function random5() {

var k = Math.floor(Math.random()*10000);
while(k<1000) {
	k = Math.floor(Math.random()*10000);
}
console.log("k e': " + k);

var out = 0;
var j; 
for(j=1; j<=k.toString().length; j++) {

out += Math.floor(k/(Math.pow(10,(j-1)))) - Math.floor(k/(Math.pow(10,j)))*10;


}

console.log("La somma delle cifre di k e': " + out);

}