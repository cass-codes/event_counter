const MAX_TIME = 5*60 //5 minute max in seconds

export class Counter {
  currentCount: number = 1;

  logEvent() 
  {
    this.currentCount++;
    // the above doesn't work because what we really want to know is /when/ something happened
  }

  getCount(time: number)
  {
    //handle things if they ask for all time (no param) or a length longer than the max time
    if(!time || time > MAX_TIME)
      time = MAX_TIME
    
    
    
  }
}