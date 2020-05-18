var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyModule;
(function (MyModule) {
    var Vehicle = /** @class */ (function () {
        function Vehicle(name, _distance) {
            if (name === void 0) { name = 'Vehicle'; }
            if (_distance === void 0) { _distance = 0; }
            this.name = name;
            this._distance = _distance;
        }
        Object.defineProperty(Vehicle.prototype, "distance", {
            get: function () { return this._distance; },
            set: function (newDistance) { this._distance = newDistance; },
            enumerable: false,
            configurable: true
        });
        Vehicle.prototype.move = function () { this.distance += 1; };
        return Vehicle;
    }());
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car(name) {
            if (name === void 0) { name = 'Car'; }
            var _this = _super.call(this) || this;
            _this.name = name;
            return _this;
        }
        return Car;
    }(Vehicle));
    MyModule.Car = Car;
})(MyModule || (MyModule = {}));
//# sourceMappingURL=MyModule.js.map