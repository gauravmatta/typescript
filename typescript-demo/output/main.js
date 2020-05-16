"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
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
var car = new Car_1.Car();
car.move();
car.move();
//# sourceMappingURL=main.js.map