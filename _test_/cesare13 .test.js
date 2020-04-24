var cesare13 = require('../cesare13');

describe('cesare13', () => {
  it('should return a string', () => {
    const results = cesare13();
    expect(typeof results).toBe('string');
  });
});
