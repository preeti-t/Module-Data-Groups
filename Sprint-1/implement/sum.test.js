/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
    const elements = [];
    const currentOutput = sum(elements);
    expect(currentOutput).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with only one number, returns that number", () => {
    const elements = [6];
    const currentOutput = sum(elements);
    expect(currentOutput).toEqual(6);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array that contains negative numbers, returns the correct total sum", () => {
    const elements = [6, -8, 10, -7];
    const currentOutput = sum(elements);
    expect(currentOutput).toEqual(1);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array that contains decimal/float numbers, returns the correct total sum", () => {
    const elements = [6.5, -8.2, 10.01, -7.98]; //Added decimal numbers with more than one decimal too
    const currentOutput = sum(elements);
    expect(currentOutput).toBeCloseTo(0.33, 2); //Gives the closer result with 2 decimals
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array that contains non-numerical values, ignores the non-numerical and returns the correct total numerical sum", () => {
    const elements = [6.5, "e", "t", -7.98]; //Kept some negative numbers too
    const currentOutput = sum(elements);
    expect(currentOutput).toBeCloseTo(-1.48, 2); //Gives the closer result with 2 decimals
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array that contains only non-numerical values, returns zero", () => {
    const elements = ["a", "e", "t", "&"]; //Included symbols
    const currentOutput = sum(elements);
    expect(currentOutput).toEqual(0);
});
