function mathPower(number, power) {

    //console.log(Math.pow(number, power));

    let result = 1;

    for (let i = 1; i <= power; i++) {
        result = multiplyTwoNumbers(result, number);
    }

    function multiplyTwoNumbers(a, b) {
        
        return a * b;
    }

    return result;
}

console.log(mathPower(2, 8));