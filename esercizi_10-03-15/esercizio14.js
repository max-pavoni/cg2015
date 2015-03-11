function media_e_dev_standard() {

a = Math.round(Math.random()*100);
b = Math.round(Math.random()*100);

console.log("Il primo numero e': " + a);

console.log("Il secondo numero e': " + b);

var media = (a+b)/2;

var dev = Math.sqrt((Math.pow((a-media),2) + Math.pow((b-media),2))/2);

console.log("La media e': " + media);
console.log("La deviazione standard e': " + dev);

}