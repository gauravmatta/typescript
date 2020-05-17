"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(_distance, _speed) {
        if (_distance === void 0) { _distance = 0; }
        if (_speed === void 0) { _speed = 1; }
        this._distance = _distance;
        this._speed = _speed;
    }
    Car.isAuto = function () {
        return Car.controls.isAuto;
    };
    Car.prototype.move = function () {
        this._distance = this._distance + this._speed;
    };
    Object.defineProperty(Car.prototype, "distance", {
        get: function () {
            return this._distance;
        },
        set: function (newDistance) {
            this._distance = newDistance;
        },
        enumerable: false,
        configurable: true
    });
    Car.controls = {
        isAuto: true
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=Car.js.map