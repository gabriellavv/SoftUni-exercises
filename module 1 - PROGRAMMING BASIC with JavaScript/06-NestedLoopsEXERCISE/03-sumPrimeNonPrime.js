function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];
    let sumOfPrime = 0;
    let sumOfNonPrime = 0;

    while (command !== "stop") {
        let currNum = Number(command);

        if (currNum < 0) {
            console.log("Number is negative.");
            command = input[++index];
            continue;
        }

        let isPrime = true;

        for (let i = 2; i < currNum; i++) {
            if (currNum % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumOfPrime+= currNum;
        } else {
            sumOfNonPrime += currNum;
        }

        command = input[++index];
    }

    console.log(`Sum of all prime numbers is: ${sumOfPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrime}`);
}

sumPrimeNonPrime(["3",

"9",

"0",

"7",

"19",

"4",

"stop"])

