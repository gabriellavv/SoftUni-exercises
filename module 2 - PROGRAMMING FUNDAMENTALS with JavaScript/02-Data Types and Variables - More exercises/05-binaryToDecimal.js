function binaryToDecimal(binary) {

    let num = binary.toString();

    let decimal = parseInt(num, 2);

    console.log(decimal);
}

binaryToDecimal(11110000);