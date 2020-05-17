"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = exports.ERiksha = void 0;
var vehicle_1 = require("./vehicle");
var ERiksha = /** @class */ (function (_super) {
    __extends(ERiksha, _super);
    function ERiksha(name) {
        var _this = _super.call(this) || this;
        _this.name = name || 'ERiksha';
        return _this;
    }
    return ERiksha;
}(vehicle_1.Vehicle));
exports.ERiksha = ERiksha;
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name) {
        var _this = _super.call(this) || this;
        _this.name = name || 'Truck';
        return _this;
    }
    return Truck;
}(vehicle_1.Vehicle));
exports.Truck = Truck;
//# sourceMappingURL=truck.js.map