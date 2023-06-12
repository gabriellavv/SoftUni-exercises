function oddAndEvenSum(num) {

    let numToString = String(num);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numToString.length; i++) {
        let currNum = Number(numToString[i]);

        if (currNum % 2 === 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

}

console.log(oddAndEvenSum(3495892137259234));