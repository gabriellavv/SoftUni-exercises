function largestNumber(a, b, c) {

    let largestNum = Number.MIN_SAFE_INTEGER;

    if(a > largestNum) {
        largestNum = a;
    }

    if(b > largestNum) {
        largestNum = b;
    }

    if(c > largestNum) {
        largestNum = c
    }

    console.log(`The largest number is ${largestNum}.`);
}

largestNumber(-3, -5, -22.5);