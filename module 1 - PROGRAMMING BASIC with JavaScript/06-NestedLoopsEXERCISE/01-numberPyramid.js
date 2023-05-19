function numberPyramid(input) {

    let number = Number(input[0]);
    let printLine = "";
    let current = 1;
    let isBigger = false;

    for (let rows = 1; rows <= number; rows++) {
        for (let colons = 1; colons <= rows; colons++) {

            if (current > number) {
                isBigger = true;
                break;
            }
            printLine += current + " ";
            current++;
        }
        console.log(printLine);
        printLine = "";

        if (isBigger) {
            break;
        }

    }
}

numberPyramid(["7"]);