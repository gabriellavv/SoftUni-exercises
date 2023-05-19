function sumAndProduct(input) {

    let n = input[0];
    let index = (n.length) - 1;

    let lastNumOfN = Number(n[index]);

    let isFound = false;

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; 9 >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {

                    let sum = a + b + c + d;
                    let result = a * b * c * d;

                    if (sum === result && lastNumOfN === 5) {
                        console.log(`${a}${b}${c}${d}`);
                        isFound = true;
                        break;;
                    } else if (Math.trunc(result / sum) === 3) {
                        if (n % 3 === 0) {
                            console.log(`${d}${c}${b}${a}`);
                            isFound = true;
                            break;
                        }

                    }
                } if (isFound){
                    break;}

                
            }
            if (isFound){
                break;}
        } break;

    }

    if (!isFound) {
        console.log("Nothing found");
    }
}

sumAndProduct(["145"]) 