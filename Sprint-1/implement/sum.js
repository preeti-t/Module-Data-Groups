function sum(elements) {
    if (elements.length === 0) {
        //If array of elements is empty
        return 0;
    }
    const numbers = []; //Empty array to add only numerical items
    for (let i = 0; i < elements.length; i++) {
        //loop
        if (typeof elements[i] === "number") {
            numbers.push(elements[i]); //When a number is found it is added to the end of the numbers array
        }
    }
    let total = 0; //Start of a loop to add every numerical item to the previous
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total; //Sum of all items in the numbers array
}

module.exports = sum;
