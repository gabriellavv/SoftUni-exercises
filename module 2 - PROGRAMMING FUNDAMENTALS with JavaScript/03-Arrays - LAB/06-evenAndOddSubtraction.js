function evenAndOddSubtraction(array) {

    let sumOfEvens = 0;
    let sumOfOdds = 0;

    for(let number of array) {
        if (number % 2 === 0) {
            sumOfEvens += number;
        } else {
            sumOfOdds += number;
        }
    }

    console.log(sumOfEvens - sumOfOdds);
}

evenAndOddSubtraction([1,2,3,4,5,6]);