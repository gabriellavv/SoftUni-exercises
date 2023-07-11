function binaryDigitsCount(decimalNumber, b) {

    let binaryResult = decimalNumber.toString(2);

    let counter = 0;

    for (let element of binaryResult) {

        if (element == b) {
            counter++;
        }
    }

    console.log(counter);
}

binaryDigitsCount(15, 1);