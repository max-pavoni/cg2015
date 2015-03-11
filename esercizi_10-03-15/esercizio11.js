function random6(numero) {

var k = Math.floor(Math.random()*10000);
while(k<1000) {
	k = Math.floor(Math.random()*10000);
}
console.log("k e': " + k);

random6_rec(k);
}

function random6_rec(k) {

var out = 0;
var j; 
for(j=1; j<=k.toString().length; j++) {

out += Math.floor(k/(Math.pow(10,(j-1)))) - Math.floor(k/(Math.pow(10,j)))*10;


}
if(out.toString().length <2) {
	console.log("La somma delle cifre di k e': " + out);
}
else{
	return random6_rec(out);
}
}