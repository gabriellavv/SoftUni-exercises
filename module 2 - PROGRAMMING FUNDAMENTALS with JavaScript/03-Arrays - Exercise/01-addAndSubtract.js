function addAndSubtract(inputArray) {

    let newArray = [];
    let sumOfOldNums = 0;
    let sumOfNewNums = 0;

    for(let i = 0; i < inputArray.length; i++) {

        sumOfOldNums += inputArray[i];

        if (inputArray[i] % 2 === 0) {
            newArray[i] = inputArray[i] + i;
        } else {
            newArray[i] = inputArray[i] - i;
        }

        sumOfNewNums += newArray[i];
    }

    console.log(newArray);
    console.log(sumOfOldNums);
    console.log(sumOfNewNums);
}

addAndSubtract([5, 15, 23, 56, 35]);