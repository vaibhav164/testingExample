const mul = require('./mul');

// [ 8 * 3 should be 24. ]

test('multiplies 8 * 3 to equal 24', () => {
    expect(mul(8, 3)).toBe(24);
});