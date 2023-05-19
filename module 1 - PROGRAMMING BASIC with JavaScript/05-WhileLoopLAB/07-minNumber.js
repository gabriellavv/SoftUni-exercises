function minNumber(input) {

    let index = 0;
    let currentNumber = input[index];
    index++;
    let minNumber = currentNumber;

    while (currentNumber !== "Stop") {
        if(Number(currentNumber) < minNumber) {
            minNumber = Number(currentNumber);
        }
        
        currentNumber = input[index];
        index++;
    }

    console.log(minNumber);
}

minNumber([
    "100",
    "99",
    "80",
    "70",
    "Stop"]);