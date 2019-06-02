"use strict";
// Read only properties
var ReadonlyExamples;
(function (ReadonlyExamples) {
    var MyClassWithReadonlyProperties = /** @class */ (function () {
        function MyClassWithReadonlyProperties(incomingString) {
            this.youCantTouchThis = incomingString;
        }
        return MyClassWithReadonlyProperties;
    }());
})(ReadonlyExamples || (ReadonlyExamples = {}));
