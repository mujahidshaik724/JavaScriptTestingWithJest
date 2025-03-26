const caesarCipher = require('./ceaserCipher')

test('shifts characters in the string', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('abc', -3)).toBe('xyz');
});