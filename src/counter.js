"use strict";
exports.__esModule = true;
var MAX_TIME = 20; // commenting out for testing ease - 5*60 //5 minute max in seconds
var SortedMap = require("collections/sorted-map");
var Counter = /** @class */ (function () {
    function Counter() {
        // currentCount: number = 1;
        this.counterMap = new SortedMap();
    }
    // now = Math.floor(Date.now() / 1000);  //converting to a second rather than a millisecond
    Counter.prototype.logEvent = function () {
        var now = Math.floor(Date.now() / 1000);
        // console.log('now looks like: ', now)
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
        //handle things if they ask for all time (no param) or a length longer than the max time
        if (time > MAX_TIME)
            time = MAX_TIME;
        // console.log('Current Map: ', this.counterMap)
        var now = Math.floor(Date.now() / 1000);
        var max = now;
        var min = now - time;
        // console.log('max: ', max, ', min: ', min)
        var total = 0;
        this.counterMap.forEach(function (value, key) {
            // console.log('key: ', key, 'value: ', value)
            if (key >= min && key <= max) {
                total += value;
            }
        });
        // console.log('total: ', total);
        this.refreshMap();
        return total;
    };
    Counter.prototype.refreshMap = function () {
        // TODO Implementation
        var now = Math.floor(Date.now() / 1000);
        this.counterMap = this.counterMap.filter(function (value, key) {
            console.log('value: ', value, ' key: ', key, ' now: ', now);
            return key > (now - MAX_TIME);
        });
        console.log('new map: ', this.counterMap.length);
    };
    return Counter;
}());
exports.Counter = Counter;
