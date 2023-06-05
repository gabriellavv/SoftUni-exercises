function maxSequenceOfEqualElements(arr) {

    let counter = 1;
    let maxCounter = 1;
    let printline = "";

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] === arr[i - 1]) {
            counter++;
        } else {

            if (counter > maxCounter) {
                maxCounter = counter;

                printline = "";

                for (let p = i - maxCounter; p < i; p++) {
                    printline += `${arr[p]} `;
                }
            }
            counter = 1;
        }
    }

    if (maxCounter === 1) {

        console.log(arr.join(" "));
    } else {
        console.log(printline)
    }
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);