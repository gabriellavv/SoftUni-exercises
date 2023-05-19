function sumOfOddNumbers(n) {

    let sum = 0;
    let counter = n;
    let odd = 1

    while (counter > 0) {
        console.log(odd);
        sum += odd;
        odd += 2;
        counter--;
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);