function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOdd = "";

    switch (operator) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/": result = n1 / n2; break;
        case "%": result = n1 % n2; break;
    }

    switch (operator) {
        case "+":
        case "-":
        case "*":
            if (result % 2 == 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`); break;
        case "/":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            } break;
        case "%":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                console.log(`${n1} % ${n2} = ${result}`);
            } break;    
    }
}

operationsBetweenNumbers(["10", "0", "%"]);
