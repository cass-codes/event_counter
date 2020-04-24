# event_counter
Event Counter Library for Instrumental AI "coding challenge".

## Implementation
This library is very simple and only has two end points. 

### 

## Testing
This is a library, which means `npm start` isn't a necessary function. As a result, I have defined a bunch of tests in `/src/index.tx` that I have run to test this library.
I went with this approach because unit testing has a lot of limitations around timing and the nature of testing this library depends on being able to wait a certain amount of time as events are only ever logged at "now".
To run the suite of tests:
* Navigate to the root directory of the project
* `> tsc src/*.ts`
* `> node src/index.js`
Note: the whole thing does take a few mintues to run as it's currently implemented asynchronously. 