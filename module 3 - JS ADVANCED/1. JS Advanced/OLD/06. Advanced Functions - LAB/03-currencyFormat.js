function currencyFormatter(separator, symbol, symbolFirst, value) {            // дадена в условието
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

// решението е тази функция:
function createFormatter(separator, symbol, symbolFirst, formatterFn) {
    return (value) => formatterFn(separator, symbol, symbolFirst, value);
}



// partial application and input:
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);    // резултатът е функция, която приема в себе си един параметър (value)
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71


