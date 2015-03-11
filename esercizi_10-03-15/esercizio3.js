//ESERCIZIO 3a:

function primaMaiuscola(word) {
	
return word.slice(0,1).toUpperCase() + word.slice(1,word.length);

}

//ESERCIZIO 3b:

function primaMaiuscolaPerTutte(frase) {
var i = 0;
var output = "";
while(i != frase.length) {

if(frase.charAt(i) === " ") {
output += frase.charAt(i);
i++;
	
}

else {
 output += frase.slice(i,i+1).toUpperCase();
 i++;
 while(frase.charAt(i) != " " && i != frase.length) {
 	output += frase.charAt(i);
 	i++;
 }
}
}
return output;
}

