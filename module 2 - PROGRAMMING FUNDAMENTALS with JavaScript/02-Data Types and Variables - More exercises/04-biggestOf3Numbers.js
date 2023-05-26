function biggestOf3Numbers(n1, n2, n3) {

    let biggestNum = Number.MIN_SAFE_INTEGER;

    if (n1 > biggestNum) {
        biggestNum = n1;
    } 

    if (n2 > biggestNum) {
        biggestNum = n2;
    }
    
    if (n3 > biggestNum) {
        biggestNum = n3;
    }

    console.log(biggestNum);
}

biggestOf3Numbers(-2, 7, 3);