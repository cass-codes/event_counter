"use strict";
exports.__esModule = true;
var counter_1 = require("./counter");
var Main = /** @class */ (function () {
    function Main() {
        this.run();
    }
    Main.prototype.run = function () {
        this.testAskingOutsideTimeFrame();
        this.testAskingInsideTimeFrame();
        this.testMultipleInsideTimeFrame();
        this.testMultipleOutsideTimeFrame();
        this.testSomeInTimeFrameSomeOut();
        this.testMaxesOutTimeFrame();
        this.testContinuousAdditionTimeout();
        this.testEventCountDoesntChange();
    };
    Main.prototype.testEventCountDoesntChange = function () {
        var myCounter = new counter_1.Counter();
        for (var i = 0; i < 5; i++) {
            myCounter.logEvent();
        }
        var initResult = myCounter.getEventCount();
        var success = true;
        for (var j = 0; j < 10; j++) {
            var testResult = myCounter.getEventCount();
            if (testResult !== initResult) {
                success = false;
            }
        }
        if (success) {
            console.log('result did not change no matter how many times we called inside the time frame');
        }
        else {
            console.log('result changed when we called it again inside the alloted time frame');
        }
    };
    Main.prototype.testContinuousAdditionTimeout = function () {
        var myCounter = new counter_1.Counter();
        for (var i = 0; i < 30; i++) {
            myCounter.logEvent();
            this._sleep(1000); // sleep for a second
        }
        var result = myCounter.getEventCount();
        console.log('result (should be 20): ', result);
    };
    Main.prototype.testMaxesOutTimeFrame = function () {
        var myCounter = new counter_1.Counter();
        for (var i = 0; i < 5; i++) {
            myCounter.logEvent();
        }
        this._sleep(30000); //sleep 30 seconds (currently MAX is set to 20 seconds)
        for (var i = 0; i < 5; i++) {
            myCounter.logEvent();
        }
        var result = myCounter.getEventCount();
        console.log('result (should be 5): ', result);
    };
    Main.prototype.testSomeInTimeFrameSomeOut = function () {
        var myCounter = new counter_1.Counter();
        for (var i = 0; i < 5; i++) {
            myCounter.logEvent();
        }
        this._sleep(3000); //sleep 3 seconds
        for (var i = 0; i < 5; i++) {
            myCounter.logEvent();
        }
        var result = myCounter.getEventCount(1);
        console.log('result (should be 5): ', result);
    };
    Main.prototype.testMultipleOutsideTimeFrame = function () {
        var myCounter = new counter_1.Counter();
        for (var i = 0; i < 10; i++) {
            myCounter.logEvent();
        }
        this._sleep(3000); //sleep 3 seconds
        var result = myCounter.getEventCount(1);
        console.log('result (should be 0): ', result);
    };
    Main.prototype.testMultipleInsideTimeFrame = function () {
        var myCounter = new counter_1.Counter();
        for (var i = 0; i < 10; i++) {
            myCounter.logEvent();
        }
        var result = myCounter.getEventCount(1);
        console.log('result (should be 10): ', result);
    };
    Main.prototype.testAskingInsideTimeFrame = function () {
        var myCounter = new counter_1.Counter();
        myCounter.logEvent();
        var result = myCounter.getEventCount(1); //in the last second
        console.log('result (should be 1): ', result);
    };
    Main.prototype.testAskingOutsideTimeFrame = function () {
        var myCounter = new counter_1.Counter();
        myCounter.logEvent();
        this._sleep(3000); //waiting 3 seconds
        var result = myCounter.getEventCount(1);
        console.log('result (should be 0): ', result);
    };
    Main.prototype._sleep = function (milliseconds) {
        var date = Date.now();
        var currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    };
    return Main;
}());
var main = new Main();
