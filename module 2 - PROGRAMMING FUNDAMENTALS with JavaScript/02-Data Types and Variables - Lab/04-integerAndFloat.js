function integerAndFloat(a, b, c) {

    let sum = a + b + c;
    let typeOfNumber = "";

    if(sum % 1 === 0) {
        typeOfNumber = "Integer";
    } else {
        typeOfNumber = "Float";
    }

    console.log(`${sum} - ${typeOfNumber}`);
}

integerAndFloat(9, 100, 1.1);