function specialNumbers(input) {

    let number = Number(input[0]);
    let finalPrint = ""

    for (let i = 1111; i <= 9999; i++) {

        let specialNumber = true;
        let iToString = String(i);

        for (let x = 0; x < 4; x++) {

            let divNumber = Number(iToString[x]);

            if (number % divNumber !== 0) {
                specialNumber = false;
                break;
            }
        }

        if (specialNumber) {
            finalPrint += i + " "
        }
    }

    console.log(finalPrint);
}

specialNumbers(["16"]);