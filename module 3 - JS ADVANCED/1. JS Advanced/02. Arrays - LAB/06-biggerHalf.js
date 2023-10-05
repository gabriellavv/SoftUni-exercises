function biggerHalf(array) {

    array.sort((a, b) => a - b);

    let middle = Math.floor(array.length / 2);
    
    return array.slice(middle);

}

biggerHalf([4, 7, 2, 5]);


// Решение 2:

// function biggerHalf(array) {
//     let sortedNumbers = array.sort((a, b) => a - b);
//     sortedNumbers.splice(0, array.length / 2);
//     return sortedNumbers;
// }