import { Counter } from './counter'
class Main {

  constructor() {
    this.run()
  }

  run() {
    this.testAskingOutsideTimeFrame();
    this.testAskingInsideTimeFrame();
    this.testMultipleInsideTimeFrame();
    this.testMultipleOutsideTimeFrame();
    this.testSomeInTimeFrameSomeOut();
  }

  testSomeInTimeFrameSomeOut() {
    const myCounter = new Counter();
    for (var i =0; i < 5; i++) {
      myCounter.logEvent();
    }
    this._sleep(3000); //sleep 3 seconds
    for (var i =0; i < 5; i++) {
      myCounter.logEvent();
    }
    var result = myCounter.getEventCount(1);
    console.log('result (should be 5): ', result)
  }

  testMultipleOutsideTimeFrame() {
    const myCounter = new Counter();
    for (var i =0; i < 10; i++) {
      myCounter.logEvent();
    }
    this._sleep(3000); //sleep 3 seconds
    var result = myCounter.getEventCount(1);
    console.log('result (should be 0): ', result)
  }


  testMultipleInsideTimeFrame() {
    const myCounter = new Counter();
    for (var i =0; i < 10; i++) {
      myCounter.logEvent();
    }
    var result = myCounter.getEventCount(1);
    console.log('result (should be 10): ', result)
  }

  testAskingInsideTimeFrame() {
    const myCounter = new Counter();
    myCounter.logEvent();
    var result = myCounter.getEventCount(1); //in the last second
    console.log('result (should be 1): ', result)
  }

  testAskingOutsideTimeFrame() {
    const myCounter = new Counter();
    myCounter.logEvent();
    this._sleep(3000); //waiting 3 seconds
    var result = myCounter.getEventCount(1);
    console.log('result (should be 0): ', result)
  }

  _sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

}

var main:Main = new Main();