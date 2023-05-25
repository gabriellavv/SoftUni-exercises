function calculator(num1, operator, num2) {

    let number1 = Number(num1);
    let number2 = Number(num2);
    let result = 0;

    if (operator === "+") {
        result = number1 + number2;
    } else if (operator === "-") {
        result = number1 - number2;
    } else if (operator === "*") {
        result = number1 * number2;
    } else if (operator === "/") {
        result = number1 / number2;
    }

    console.log(result.toFixed(2));
}

calculator("5", "+", "10");