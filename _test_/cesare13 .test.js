var cesare13 = require('../cesare13');

describe('cesare13', () => {
  it('should return a string', () => {
    const results = cesare13('');
    expect(typeof results).toBe('string');
  });

  it('should return a string', () => {
    const results = cesare13('');
    expect(typeof results).toBe('string');
  });

  it('should only accept string as parameter', () => {
    expect(() => {
      cesare13(1231);
    }).toThrow();
  });

  it('should return NOP from ABC', () => {
    const results = cesare13('ABC');
    expect(results).toBe('NOP');
  });
});
