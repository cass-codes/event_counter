const MAX_TIME = 5*60 //5 minute max in seconds
var SortedMap = require("collections/sorted-map");

export class Counter {
  // currentCount: number = 1;

  counterMap = new SortedMap();
  now = Math.floor(Date.now() / 1000);  //converting to a second rather than a millisecond


  logEvent() {
    console.log('now looks like: ', this.now)

    if (this.counterMap.has(this.now)) {
      const current = this.counterMap.get(this.now);
      this.counterMap.set(this.now, current + 1);
    } else {
      this.counterMap.set(this.now, 1);
    }
    
  }

  getCount(time: number = MAX_TIME)
  {
    //handle things if they ask for all time (no param) or a length longer than the max time
    if(time > MAX_TIME)
      time = MAX_TIME
    
    console.log('Current Map: ', this.counterMap)

    var max = this.now;
    var min = this.now - time;
    var total = 0;

    this.counterMap.forEach((value, key) => {
      console.log('key: ', key, 'value: ', value)
      if (key >= min && key <= max ) {
        total += value;
      }
    });

    return total;
    
  }
}