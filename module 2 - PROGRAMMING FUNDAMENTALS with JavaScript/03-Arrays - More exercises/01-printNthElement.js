function printNthElement(arr) {

    let nStep = Number(arr[arr.length - 1]);
    let printline = "";

    for( let i = 0; i <= arr.length - 2; i += nStep) {
        printline += `${arr[i]} `;
    }

    console.log(printline);
}

printNthElement(['5', '20', '31', '4', '20', '2']);