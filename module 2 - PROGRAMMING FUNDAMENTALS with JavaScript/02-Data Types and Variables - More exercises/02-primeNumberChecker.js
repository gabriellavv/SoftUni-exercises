function primeNumberChecker(number) {

    let isPrime = true;

    for (let i = number - 1; i > 1; i--) {

        if(number % i === 0) {
            isPrime = false;
            break;
        }
    }

    console.log(isPrime);
}

primeNumberChecker(8);