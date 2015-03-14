(function () {

  function Summer() {

    return { 
      currentSum: 0, 
      add: function(numero) {
      this.currentSum += numero;
      }, 
      getCurrentSum: function() {
      return this.currentSum;
      }
    }
  } 

  
  var s1 = Summer();
  var s2 = Summer();

  s1.add(10);
  s1.add(20);

  s2.add(30);

  s2.add(5);

  // prints 30
  console.log(s1.getCurrentSum());

  // prints 35
  console.log(s2.getCurrentSum());

}());