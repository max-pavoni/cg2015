function Rettangolo (base, altezza) {

this.base = base;
this.altezza = altezza;
}

Rettangolo.prototype.area = function () { return this.base*this.altezza;}

var r1 = new Rettangolo(5,6);

r1.area();