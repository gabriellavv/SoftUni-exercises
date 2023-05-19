function maxNumber(input) {

    let index = 0;
    let currentNumber = input[index];
    index++;
    let maxNumber = currentNumber;

    while (currentNumber !== "Stop") {
        if(Number(currentNumber) > maxNumber) {
            maxNumber = Number(currentNumber);
        }
        
        currentNumber = input[index];
        index++;
    }

    console.log(maxNumber);
}

maxNumber(["-1", "-2", "Stop"]);