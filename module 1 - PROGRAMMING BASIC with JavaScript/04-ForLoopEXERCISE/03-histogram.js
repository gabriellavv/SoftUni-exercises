function histogram(input) {

    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    
    for(let i = 1 ; i <= n; i++) {
        if (input[i] < 200) {
            p1++;
        } else if (input[i] <= 399) {
            p2++;
        } else if (input[i] <= 599) {
            p3++;
        } else if (input[i] <= 799) {
            p4++;
        } else {
            p5++;
        }
    }

    console.log(`${(100 / n * p1).toFixed(2)}%`);
    console.log(`${(100 / n * p2).toFixed(2)}%`);
    console.log(`${(100 / n * p3).toFixed(2)}%`);
    console.log(`${(100 / n * p4).toFixed(2)}%`);
    console.log(`${(100 / n * p5).toFixed(2)}%`);

}

histogram(["3", "1", "2", "999"]);