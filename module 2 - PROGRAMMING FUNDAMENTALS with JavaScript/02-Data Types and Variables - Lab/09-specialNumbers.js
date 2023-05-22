function specialNumbers(n) {

    let nToString = n.toString();


    for (let i = 1; i <= n; i++) {

        let sumOfDigits = 0;
        let iToString = i.toString();

        for (let index = 0; index < iToString.length; index++) {
            sumOfDigits += Number(iToString[index]);
        }

        let isSpecialNumber = "False";

        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            isSpecialNumber = "True";
        }

        console.log(`${i} -> ${isSpecialNumber}`);
    }
}

specialNumbers(15);