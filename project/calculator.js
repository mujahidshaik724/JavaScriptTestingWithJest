const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => b !== 0 ? a / b : 'Error: Division by zero',
    multiply: (a, b) => a * b,
};
module.exports = calculator;