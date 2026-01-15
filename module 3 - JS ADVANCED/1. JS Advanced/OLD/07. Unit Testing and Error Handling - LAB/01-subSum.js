function subSum(array, startIndex, endIndex) {

    // Write a function to sum a range of numeric elements from an array. 
    // The function takes three parameters - an array, start index and end index.
    // Both indexes are inclusive. 
    // Have in mind that the array elements may not be of type Number and cast everything.
    // Implement the following error handling:

    //   -	If the first element is not an array, return NaN:
    if (!Array.isArray(array)) {
        return NaN;
    };

    //   - 	If the start index is less than zero, consider its value to be a zero: 
    if (startIndex < 0) {
        startIndex = 0;
    };

    
    //   -	If the end index is outside the bounds of the array, assume it points to the last index of the array:
    if(endIndex >= array.length) {
        endIndex = array.length - 1;
    }

    let sum = 0;

    for(let i = startIndex; i <= endIndex; i++) {
        if(typeof array[i] !== "number") {
            return NaN;
        }
        sum += array[i];
    }

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
