function amazingNumbers(number) {

    let numberToString = number.toString();
    let sum = 0;

    for(let i = 0; i < numberToString.length; i++) {
        sum += Number(numberToString[i]);
    }

    let isAmazing = sum.toString().includes('9') ? "True" : "False";

    console.log(`${number} Amazing? ${isAmazing}`);
}

amazingNumbers(9);