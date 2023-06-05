function nonDecreasingSubset(array) {

    let biggestNum = Number.MIN_SAFE_INTEGER; 
    let printline = "";

    for (let i = 0; i < array.length; i++) {

        let currentNum = array[i];

        if(currentNum >= biggestNum) {
            printline += `${currentNum} `;
            biggestNum = currentNum; 
        }
    }

    console.log(printline);
}

nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);
