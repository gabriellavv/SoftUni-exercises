function barcodeGenerator(input) {

    let startRange = input[0];
    let endRange = input[1];
    let printline = "";

    let startA = Number(startRange[0]);
    let endA = Number(endRange[0]);
    let startB = Number(startRange[1]);
    let endB = Number(endRange[1]);
    let startC = Number(startRange[2]);
    let endC = Number(endRange[2]);
    let startD = Number(startRange[3]);
    let endD = Number(endRange[3]);

    for (let dig1 = startA; dig1 <= endA; dig1++) {
        for (let dig2 = startB; dig2 <= endB; dig2++) {
            for (let dig3 = startC; dig3 <= endC; dig3++) {
                for (let dig4 = startD; dig4 <= endD; dig4++) {
                    if( dig1 % 2 !== 0 && dig2 % 2 !== 0 && dig3 % 2 !== 0 && dig4 % 2 !== 0) {
                        printline += "" + dig1 + dig2 + dig3 + dig4 + " ";
                    }
                }
            }
        }
    }

    console.log(printline)


}

barcodeGenerator(["2345", "6789"]);