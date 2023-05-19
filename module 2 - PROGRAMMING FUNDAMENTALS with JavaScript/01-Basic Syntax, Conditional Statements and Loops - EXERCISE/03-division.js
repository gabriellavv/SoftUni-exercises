function division(number) {

    let printLine = ""
    if (number % 10 === 0) {
        printLine = `The number is divisible by 10`;
    } else if (number % 7 === 0) {
        printLine = `The number is divisible by 7`;
    } else if (number % 6 === 0) {
        printLine = `The number is divisible by 6`;
    } else if (number % 3 === 0) {
        printLine = `The number is divisible by 3`;
    } else if (number % 2 === 0) {
        printLine = `The number is divisible by 2`
    } else {
        printLine = "Not divisible"
    }

    console.log(printLine);
}

division(30);