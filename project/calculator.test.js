const calculator = require('./calculator');

test('performs basic arithmetic operations', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(10, 0)).toBe('Error: Division by zero');
    expect(calculator.multiply(4, 5)).toBe(20);
});