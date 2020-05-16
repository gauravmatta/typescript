"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(distance) {
        this.distance = distance;
    }
    Car.prototype.move = function () {
        this.distance = this.distance + 1;
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=Car.js.map