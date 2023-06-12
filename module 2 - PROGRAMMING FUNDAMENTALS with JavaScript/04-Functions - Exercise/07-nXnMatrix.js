function nXnMatrix(n) {

    for(let row = 1; row <= n; row++){

        let printline = ""
        for(let col = 1; col <= n; col++) {

            printline += n + " ";
        }

        console.log(printline);
    }
}

nXnMatrix(7);