const div = require('./div');

// [ 8 / 4 should be 2. ]

test('divides 8 / 4 to equal 2', () => {
    expect(div(8, 4)).toBe(2);
});