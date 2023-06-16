function lastKNumbersSequence(n, k) {

    let result = [1];


    for (let i = 1; i < n; i++) {

        let start = i - k > 0 ? i - k : 0;
        let end = i;
        let lastK = result.slice(-k);
        let sum = 0;

        for(let element of lastK) {
            sum += element;
        }

        result.push(sum);
    }

console.log(result.join(" "));
}

lastKNumbersSequence(8, 2);