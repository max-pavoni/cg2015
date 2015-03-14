function mcm() {

a = Math.ceil(Math.random()*100);
b = Math.ceil(Math.random()*100);

console.log("Il primo numero e': " + a);

console.log("Il secondo numero e': " + b);

var mcm;

for(i=1; i<=Math.min(a,b); i++) {

mcm = Math.max(a,b)*i;

if(mcm%Math.min(a,b) === 0)
	return mcm; 

}

return console.log("Il  mcm e': " + mcm);

}