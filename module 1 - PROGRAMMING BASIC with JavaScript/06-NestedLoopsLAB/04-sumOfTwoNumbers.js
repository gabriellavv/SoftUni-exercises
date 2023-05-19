function sumOfTwoNumbers(input) {

    let nStart = Number(input[0]);
    let nEnd = Number(input[1]);
    let nMagic = Number(input[2]);
    let combinations = 0;

    let done = false;

    for (let i = nStart ; i <= nEnd ; i++) {
        for (let ii = nStart ; ii <= nEnd ; ii++) {

            combinations++;

            if ( i + ii === nMagic) {
                console.log(`Combination N:${combinations} (${i} + ${ii} = ${nMagic})`);
                done = true;
                break;
            }
        }

        if (done) {
            break;  
        }   
    }
    if (!done) {
    console.log(`${combinations} combinations - neither equals ${nMagic}`)};
}

sumOfTwoNumbers(["23", "24", "20"]);