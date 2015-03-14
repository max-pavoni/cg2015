(function () {
  var person = {
  buy: function(car) {
    console.log("I'm rich");
  }
  };

  var  car = {
    price: 1200, drive: function() {console.log("Vrum Vrum")}
  };

  // print Vrum Vrum
  car.drive();

  // print I'm rich
  if ( car.price > 1000 ) {
    person.buy(car);
  }
}());



(function () {

  function Employee() { }

  Employee.prototype.hello = function() {return console.log("I work at IBM.");}
  

  var employees = [new Employee(), new Employee(), new Employee(), new Employee()];

  for (var i=0; i < employees.length; ++i ) {
    // print I work at IBM
    employees[i].hello();
  }
}());