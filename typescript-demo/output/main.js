"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var truck_1 = require("./truck");
var myObj = {
    id: 2,
    name: 'Gaurav',
    method: function () { console.log('hello'); },
    methodWithReturnVal: function () { return 2; },
    sum: function (numbers) {
        return numbers.reduce(function (a, b) { return a + b; });
    }
};
var sum = myObj.sum([1, 2, 3]);
var car = new Car_1.Car(0);
console.log(car.distance);
car.move();
console.log(car.distance);
car._speed = 2;
car.move();
console.log(car.distance);
car._speed = 3;
car.move();
console.log(car.distance);
var Audi = new Car_1.Car();
console.log(Audi.distance);
Audi.distance = 55;
console.log(Audi.distance);
//Calling Static Variable
console.log(Car_1.Car.controls.isAuto);
var e_riksha = new truck_1.ERiksha();
console.log(e_riksha.name);
e_riksha.distance = 5;
e_riksha.move();
e_riksha.move();
console.log(e_riksha.distance);
var truck = new truck_1.Truck();
console.log(truck.name);
//# sourceMappingURL=main.js.map