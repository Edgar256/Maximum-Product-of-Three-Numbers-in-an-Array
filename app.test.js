const maxProuct = require('./app.js');

test('check for correct out', () => {
    expect(maxProuct([1,2,3,4,5,6])).toBe(120);
})

test('check for empty array', () => {
    expect(maxProuct([])).toBe(null);
})

test('check for array with less than 3 elements', () => {
    expect(maxProuct([2,4])).toBe(null);
})

test('check for array with non number elements', () => {
    expect(maxProuct([2,3,'edgar', 5, 6, 3])).toBe(null);
})

