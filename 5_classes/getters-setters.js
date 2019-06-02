"use strict";
// Getters and Setters
var FanMode;
(function (FanMode) {
    FanMode[FanMode["Off"] = 0] = "Off";
    FanMode[FanMode["Low"] = 1] = "Low";
    FanMode[FanMode["High"] = 2] = "High";
})(FanMode || (FanMode = {}));
var Fan = /** @class */ (function () {
    function Fan() {
        this.currentFanMode = FanMode.Off;
    }
    Object.defineProperty(Fan.prototype, "fanMode", {
        get: function () {
            return this.currentFanMode;
        },
        set: function (value) {
            this.currentFanMode = value;
        },
        enumerable: true,
        configurable: true
    });
    return Fan;
}());
