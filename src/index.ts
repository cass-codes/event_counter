import { Counter } from './counter'
class Main {

  constructor() {
    this.runTests();
  }

  runTests() {
    this.testAskingOutsideTimeFrame();
    this.testAskingInsideTimeFrame();
    this.testMultipleInsideTimeFrame();
    this.testMultipleOutsideTimeFrame();
    this.testSomeInTimeFrameSomeOut();
    this.testMaxesOutTimeFrame();
    this.testContinuousAdditionTimeout();
    this.testEventCountDoesntChange();
    this.testHighVolume(); 
  }

  testHighVolume() {
    const myCounter: Counter = new Counter();
    for(var i = 0; i < 1000000; i++) {
      myCounter.logEvent();
    }
    var result = myCounter.getEventCount();
    console.log('result (should be 1000000): ', result);
  }

  testEventCountDoesntChange() {
    const myCounter: Counter = new Counter();
    for (var i = 0; i < 5; i++) {
      myCounter.logEvent();
    }
    var initResult = myCounter.getEventCount();
    var success: boolean = true;
    for (var j = 0; j < 10; j++) {
      var testResult = myCounter.getEventCount();
      if (testResult !== initResult){
        success = false;
      }
    }
    if (success) {
      console.log('result did not change no matter how many times we called inside the time frame');
    } else {
      console.log('result changed when we called it again inside the alloted time frame');
    }
  }

  testContinuousAdditionTimeout () {
    const myCounter: Counter = new Counter();
    for (var i = 0; i < 30; i++) {
      myCounter.logEvent();
      this._sleep(12 * 1000); // sleep for 12 seconds (total of 6 minutes)
    }
    var result = myCounter.getEventCount(); 
    console.log('result (should be 25): ', result);
  }

  testMaxesOutTimeFrame() {
    const myCounter: Counter = new Counter();
    for (var i =0; i < 5; i++) {
      myCounter.logEvent();
    }
    this._sleep((5 * 60 * 1000) + 2); //sleep 5:02 minutes 
    for (var i =0; i < 5; i++) {
      myCounter.logEvent();
    }
    var result = myCounter.getEventCount();
    console.log('result (should be 5): ', result);
  }

  testSomeInTimeFrameSomeOut() {
    const myCounter: Counter = new Counter();
    for (var i =0; i < 5; i++) {
      myCounter.logEvent();
    }
    this._sleep(3000); //sleep 3 seconds
    for (var i =0; i < 5; i++) {
      myCounter.logEvent();
    }
    var result = myCounter.getEventCount(1);
    console.log('result (should be 5): ', result);
  }

  testMultipleOutsideTimeFrame() {
    const myCounter: Counter = new Counter();
    for (var i =0; i < 10; i++) {
      myCounter.logEvent();
    }
    this._sleep(3000); //sleep 3 seconds
    var result = myCounter.getEventCount(1);
    console.log('result (should be 0): ', result);
  }


  testMultipleInsideTimeFrame() {
    const myCounter: Counter = new Counter();
    for (var i =0; i < 10; i++) {
      myCounter.logEvent();
    }
    var result = myCounter.getEventCount(1);
    console.log('result (should be 10): ', result);
  }

  testAskingInsideTimeFrame() {
    const myCounter: Counter = new Counter();
    myCounter.logEvent();
    var result = myCounter.getEventCount(1); //in the last second
    console.log('result (should be 1): ', result);
  }

  testAskingOutsideTimeFrame() {
    const myCounter: Counter = new Counter();
    myCounter.logEvent();
    this._sleep(3000); //waiting 3 seconds
    var result = myCounter.getEventCount(1);
    console.log('result (should be 0): ', result);
  }

  _sleep(milliseconds) {
    const date: number = Date.now();
    let currentDate: number = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

}

var main:Main = new Main();