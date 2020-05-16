"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
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
var car = new car_1.Car();
car.distance = 0;
car.move();
car.move();
//# sourceMappingURL=main.js.map