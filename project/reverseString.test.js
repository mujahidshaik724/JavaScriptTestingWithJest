const reverseString = require('./reverseString');

test('reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
});