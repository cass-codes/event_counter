const MAX_TIME = 5*60 //5 minute max in seconds
var SortedMap = require("collections/sorted-map");

export class Counter {
  // currentCount: number = 1;

  counterMap = new SortedMap();
  // now = Math.floor(Date.now() / 1000);  //converting to a second rather than a millisecond


  logEvent() {
    var now = Math.floor(Date.now() / 1000)
    // console.log('now looks like: ', now)

    if (this.counterMap.has(now)) {
      const current = this.counterMap.get(now);
      this.counterMap.set(now, current + 1);
    } else {
      this.counterMap.set(now, 1);
    }
    
  }

  getEventCount(time: number = MAX_TIME)
  {
    //handle things if they ask for all time (no param) or a length longer than the max time
    if(time > MAX_TIME)
      time = MAX_TIME
    
    // console.log('Current Map: ', this.counterMap)

    var now = Math.floor(Date.now() / 1000);
    var max = now;
    var min = now - time;
    // console.log('max: ', max, ', min: ', min)
    var total = 0;

    this.counterMap.forEach((value, key) => {
      // console.log('key: ', key, 'value: ', value)
      if (key >= min && key <= max ) {
        total += value;
      }
    });

    // console.log('total: ', total);
    this.refreshMap();
    return total;
  }

  refreshMap() {

  }
}