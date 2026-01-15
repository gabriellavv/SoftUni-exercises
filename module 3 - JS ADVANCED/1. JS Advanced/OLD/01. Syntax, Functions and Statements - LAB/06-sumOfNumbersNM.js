function sumOfNumbersNM(n, m) {

    let a = Number(n);
    let b = Number(m);
    let sum = 0;

    for(let i = a; i <= b; i++){

        sum += i;
    }

    console.log(sum);

}

sumOfNumbersNM('1', '5' ); // 15
sumOfNumbersNM('-8', '20'); // 174