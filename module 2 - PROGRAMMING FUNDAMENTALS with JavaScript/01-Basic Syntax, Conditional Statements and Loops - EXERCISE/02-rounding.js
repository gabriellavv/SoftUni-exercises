function rounding(num, precision) {

    let finalPrecision = precision

    if (finalPrecision > 15) {
        finalPrecision = 15;
    }

    let numToPrint = Number(num.toFixed(finalPrecision));

    console.log(parseFloat(numToPrint));
}

rounding(10.5,3 );