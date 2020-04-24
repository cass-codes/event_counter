"use strict";
exports.__esModule = true;
var MAX_TIME = 20; // commenting out for testing ease - 5*60 //5 minute max in seconds
var SortedMap = require("collections/sorted-map");
var Counter = /** @class */ (function () {
    function Counter() {
        this.counterMap = new SortedMap();
    }
    Counter.prototype.logEvent = function () {
        var now = this._now();
        if (this.counterMap.has(now)) {
            var current = this.counterMap.get(now);
            this.counterMap.set(now, current + 1);
        }
        else {
            this.counterMap.set(now, 1);
        }
    };
    Counter.prototype.getEventCount = function (time) {
        if (time === void 0) { time = MAX_TIME; }
        if (time > MAX_TIME)
            time = MAX_TIME;
        var now = this._now();
        var max = now;
        var min = now - time;
        var total = 0;
        this.counterMap.forEach(function (value, key) {
            if (key >= min && key <= max) {
                total += value;
            }
        });
        this.refreshMap();
        return total;
    };
    Counter.prototype.refreshMap = function () {
        var now = this._now();
        this.counterMap = this.counterMap.filter(function (value, key) {
            return key > (now - MAX_TIME);
        });
    };
    Counter.prototype._now = function () {
        return Math.floor(Date.now() / 1000);
    };
    return Counter;
}());
exports.Counter = Counter;
