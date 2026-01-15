function processOddPositions(array) {

    let result = [];
    for (let i = 1; i < array.length; i += 2) {
        let num = array[i] * 2;
        result.unshift(num);
    }

    return result.join(" ");
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));


// Рещение 2:

// function solve(arr) {
//     return arr.filter((a, i) => i % 2 !== 0)
//     .map(x => x * 2)
//     .reverse()
//     .join(' ');
//     }