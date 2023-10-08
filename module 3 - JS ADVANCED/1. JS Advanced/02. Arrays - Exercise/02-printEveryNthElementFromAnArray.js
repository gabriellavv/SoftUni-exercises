function printEveryNthElementFromAnArray(array, nSteps) {

    let result = [];
    for (let i = 0; i < array.length; i += nSteps) {
        result.push(array[i]);
    }
    
    return result;
}

console.log(printEveryNthElementFromAnArray(
    ['5', '20', '31', '4', '20'],
    2
));