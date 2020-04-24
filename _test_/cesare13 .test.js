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

  it('should return nop from abc', () => {
    const results = cesare13('abc');
    expect(results).toBe('nop');
  });

  it('should return nopNOP from abcABC', () => {
    const results = cesare13('abcABC');
    expect(results).toBe('nopNOP');
  });

  it('should return Nyn zn xbgn, n xbg zn Nyr from Ala ma kota, a kot ma Ale', () => {
    const results = cesare13('Ala ma kota, a kot ma Ale');
    expect(results).toBe('Nyn zn xbgn, n xbg zn Nyr');
  });
});
