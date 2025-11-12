/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/
function findMax(arr) {
  
  const numbers = arr.filter(x => typeof x === "number"); // only keep numbers

  if (numbers.length === 0) return -Infinity; 
  // if there are no numbers, return -Infinity

  // find the maximum value
  return Math.max(...numbers);
}

module.exports = findMax;


// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test.todo("given an empty array, returns -Infinity");

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("returns that number if array has one number", () => {
  expect(findMax([7])).toBe(7);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("returns the largest number overall", () => {
  expect(findMax([-5, 0, 20, 10, -1])).toBe(20);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("returns the closest to zero", () => {
  expect(findMax([-10, -3, -7])).toBe(-3);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("returns the largest decimal number", () => {
  expect(findMax([1.2, 3.5, 2.8])).toBe(3.5);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("ignores non-numeric values and returns max number", () => {
  expect(findMax(["hey", 10, "hi", 60, 10])).toBe(60);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("returns -Infinity when all values are non-numeric", () => {
  expect(findMax(["a", "b", "c"])).toBe(-Infinity);
});
