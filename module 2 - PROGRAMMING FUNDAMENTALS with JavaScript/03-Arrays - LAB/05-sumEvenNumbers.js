function sumEvenNumbers(array) {

    let sum = 0;

    for (let string of array) {
        stringToNum = Number(string);

        if (stringToNum % 2 === 0) {
            sum += stringToNum;
        }
        
    }

    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);