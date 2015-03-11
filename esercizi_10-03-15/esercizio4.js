//ESERCIZIO 4

function select(data, key, values) {
	output = [];
	var j;
	for(j=0; j<values.length; j++) {
		
	output = output.concat(data.filter(function(item) {
			return item[key] === values[j];
		}));
	}
return output;
}