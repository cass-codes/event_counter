import { expect } from 'chai';
import { sayHello, sayGoodbye } from '../../src/helloWorld';

describe('sayHello', () => {
  it('sayHello says hello', () => {
      const result = sayHello();
      expect(result).to.equal('hi');
  });

  it('async function returns true', async () => {
      const result = await sayGoodbye();
      expect(result).to.equal('goodbye');
  });
});