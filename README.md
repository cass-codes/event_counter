# event_counter
Event Counter Library 

This counter is to log events and count them up until a certain point. It will only store counts for the most recent 5 minutes.

## Implementation
This library is very simple and only has two functions, logging an event and getting the count. 

### Set up
To use this in your code you'll need to install it using npm
```
> npm install event-counter
```
and then import it...
```
import { Counter } from 'counter'
```
and then instantiate it!
```
const myCounter: Counter = new Counter();
```

### Adding an event
When you want to add an event, simple call the `logEvent` function.
```
myCounter.logEvent();
```

### Getting the count
When you want to know how many times the events have happened, call the `getEventCount` function.
```
myCounter.getEventCounter();
```
`getEventCounter` can also take a parameter, `time` which is the time in seconds from Now that you want to get the count for.

For example if you wanted the count of events in the last minute you would call `getEventCounter(60)`. 

Also, the Counter only stores events that have happened in the last five minutes, so if you called `getEventCounter(60*6)` (the count for the last 6 minutes) it would only return the count for the last 5 minutes. 

## Testing
This is a library, so `npm start` isn't a necessary function. As a result, I have defined a bunch of tests in `/src/index.tx` that I have run to test this library.

I went with this approach because unit testing has a lot of limitations around timing and the nature of testing this library depends on being able to wait a certain amount of time as events are only ever logged at "now".

To run the suite of tests:
* Navigate to the root directory of the project
* `> tsc src/*.ts`
* `> node src/index.js`
Note: the whole thing does take 10 full mintues to run as it's currently implemented asynchronously. If you do not wish to wait you can comment out the tests you don't wish to run.
