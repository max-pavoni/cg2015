(function() {
  var larger = function(o1, o2) {
    if ( o1.size > o2.size ) {
        console.log('o1 is larger');
    } else {
        console.log('o2 is larger');
    }
  };


  var x = {size: 5};
  var y = {size: 5};

  larger(x, y);    
}());