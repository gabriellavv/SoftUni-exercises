function sumNumbers(input) {

    let result = Number(input[0]);
    let numbers = Number(input[1]);
    let sum = 0;
    let index = 2;

    while (sum < result) {
        sum += numbers;
        numbers = Number(input[index]);
        index++;
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
