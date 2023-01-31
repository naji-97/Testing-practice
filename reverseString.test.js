function reverseString(string) {
 return string.split('').reverse().join('');
}

test('reverseString function should reverse string correctly', () => {
 const input = 'Hello';
 const expectedOutput = 'olleH';
 expect(reverseString(input)).toBe(expectedOutput);
});