class Calculator {
 add(a, b) {
   return a + b;
 }

 subtract(a, b) {
   return a - b;
 }

 divide(a, b) {
   return a / b;
 }

 multiply(a, b) {
   return a * b;
 }
}

describe('Calculator add method', () => {
 const calculator = new Calculator();

 test('Adding two positive numbers should return their sum', () => {
   const a = 5;
   const b = 7;
   const expected = 12;
   expect(calculator.add(a, b)).toBe(expected);
 });

 test('Adding a negative and a positive number should return their difference', () => {
   const a = -5;
   const b = 7;
   const expected = 2;
   expect(calculator.add(a, b)).toBe(expected);
 });

 test('Adding two negative numbers should return their negated sum', () => {
   const a = -5;
   const b = -7;
   const expected = -12;
   expect(calculator.add(a, b)).toBe(expected);
 });
});

describe('Calculator subtract method', () => {
 const calculator = new Calculator();

 test('Subtracting two positive numbers should return their difference', () => {
   const a = 7;
   const b = 5;
   const expected = 2;
   expect(calculator.subtract(a, b)).toBe(expected);
 });

 test('Subtracting a positive and a negative number should return their sum', () => {
   const a = 7;
   const b = -5;
   const expected = 12;
   expect(calculator.subtract(a, b)).toBe(expected);
 });

 test('Subtracting two negative numbers should return their negated difference', () => {
   const a = -7;
   const b = -5;
   const expected = -2;
   expect(calculator.subtract(a, b)).toBe(expected);
 });
});

describe('Calculator divide method', () => {
 const calculator = new Calculator();

 test('Dividing two positive numbers should return their ratio', () => {
   const a = 8;
   const b = 4;
   const expected = 2;
   expect(calculator.divide(a, b)).toBe(expected);
 });

 test('Dividing a positive number by a negative number should return their negated ratio', () => {
   const a = 8;
   const b = -4;
   const expected = -2;
   expect(calculator.divide(a, b)).toBe(expected);
 });

 test('Dividing a negative number by a positive number should return their negated ratio', () => {
   const a = -8;
   const b = 4;
   const expected = -2;
   expect(calculator.divide(a, b)).toBe(expected);
 });
})