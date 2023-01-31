function stringLength(string) {
 if (string.length < 1) {
   throw new Error("The string must have at least 1 character.");
 }
 if (string.length > 10) {
   throw new Error("The string must not be longer than 10 characters.");
 }
 return string.length;
}

test("stringLength returns the correct length for a string within the length limits", () => {
 let myString = "Hello";
 let expectedLength = 5;
 let actualLength = stringLength(myString);

 expect(actualLength).toBe(expectedLength);
});

test("stringLength throws an error for an empty string", () => {
 let myString = "";
 expect(() => {
   stringLength(myString);
 }).toThrow("The string must have at least 1 character.");
});

test("stringLength throws an error for a string longer than 10 characters", () => {
 let myString = "Hello, world!";
 expect(() => {
   stringLength(myString);
 }).toThrow("The string must not be longer than 10 characters.");
});