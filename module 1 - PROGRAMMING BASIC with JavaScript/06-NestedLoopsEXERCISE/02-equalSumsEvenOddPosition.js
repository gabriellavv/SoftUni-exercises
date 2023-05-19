function equalSumsEvenOddPosition(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let printLine = "";

    for (let i = start; i <= end; i++) {
        let currentNum = "" + i
        let odd = 0;
        let even = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                even += currentDigit;
            } else {
                odd += currentDigit;
            }
        }

        if (even === odd) {
            printLine += `${i} `;
        }
    }

    console.log(printLine);
}

equalSumsEvenOddPosition(["100000",

    "100050"]);