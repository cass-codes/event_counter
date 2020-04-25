const MAX_TIME = 5*60; //5 minute max in seconds
var SortedMap = require("collections/sorted-map");

export class Counter {
  counterMap = new SortedMap();

  logEvent() {
    var now = this._now();

    if (this.counterMap.has(now)) {
      const current = this.counterMap.get(now);
      this.counterMap.set(now, current + 1);
    } else {
      this.counterMap.set(now, 1);
    }
    
  }

  getEventCount(time: number = MAX_TIME) {
    if(time > MAX_TIME)
      time = MAX_TIME;
    
    var now = this._now();
    var max = now;
    var min = now - time;
    var total = 0;

    this.counterMap.forEach((value, key) => {
      if (key >= min && key <= max ) {
        total += value;
      }
    });
    this.refreshMap();
    return total;
  }

  refreshMap() {
    var now = this._now();
    this.counterMap = this.counterMap.filter((value, key) => {
      return key > (now - MAX_TIME);
    });
  }

  _now() {
    return Math.floor(Date.now() / 1000);
  }
}