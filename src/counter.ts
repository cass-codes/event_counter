const MAX_TIME = 5*60 //5 minute max in seconds

export class Counter {
  // currentCount: number = 1;

  counterMap = new Map<number, number>();


  logEvent() {
    // this.currentCount++;
    // the above doesn't work because what we really want to know is /when/ something happened

    var now = Math.floor(Date.now() / 1000); //converting to a second rather than a millisecond
    console.log('now looks like: ', now)

    if (this.counterMap.has(now)) {
      const current = this.counterMap.get(now);
      this.counterMap.set(now, current + 1);
    } else {
      this.counterMap.set(now, 1);
    }
    
  }

  getCount(time: number = MAX_TIME)
  {
    //handle things if they ask for all time (no param) or a length longer than the max time
    if(time > MAX_TIME)
      time = MAX_TIME
    
    console.log('Current Map: ', this.counterMap)
    
  }
}