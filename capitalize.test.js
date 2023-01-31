describe("capitalize function", () => {
 it("should capitalize the first letter of a string", () => {
   const string = "hello";
   const expected = "Hello";

   expect(capitalize(string)).toBe(expected);
 });
});


function capitalize(string) {
 return string.charAt(0).toUpperCase() + string.slice(1);
}