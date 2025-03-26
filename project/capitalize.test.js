const capitalize = require('./capitalize');

test('capitalizes the first character of the string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
});