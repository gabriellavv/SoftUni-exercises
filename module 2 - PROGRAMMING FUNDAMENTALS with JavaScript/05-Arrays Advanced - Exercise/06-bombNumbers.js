function bombNumbers(numbers, bombArr) {

    let [bombNum, bombPower] = bombArr;
    let index = numbers.indexOf(bombNum);

    while(index !== -1) {
        let start = Math.max(0, index - bombPower);
        let end = Math.min(index + bombPower, numbers.length - 1);

        numbers.splice(start, end-start + 1);

        index = numbers.indexOf(bombNum);
    }
    
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(sum)
}

bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);