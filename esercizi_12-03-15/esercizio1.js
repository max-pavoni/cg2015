(function() {
  var larger = function(o1, o2) {
    if ( o1.size > o2.size ) {
        console.log('o1 is larger');
    } else {
        console.log('o2 is larger');
    }
  };

  function Numero(numero) {

this.size = numero;

  }

  var x = new Numero(5);
  var y = new Numero(2);

  larger(x, y);    
}());