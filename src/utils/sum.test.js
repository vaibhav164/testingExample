const sum = require('./sum');

// [ 4 + 8 should be 12. ]

test('adds 4 + 8 to equal 12', () => {
  expect(sum(4, 8)).toBe(12);
});