import { expect } from 'chai';
import {Counter} from '../../src/counter';

describe('logging 1 event', () => {
  it('returns 1 when asking for all time', () => {
    const myCounter = new Counter();
    myCounter.logEvent();
    var result = myCounter.getCount(); // no params means all time
    expect(result).to.equal(1);
  });

  it('returns 0 when asking outside the time frame', async () => {
      const result = await sayGoodbye();
      expect(result).to.equal('goodbye');
  });
});