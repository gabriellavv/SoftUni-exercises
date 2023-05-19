function triangleOfNumbers(n) {

    let printline = "";

    for(let rows = 1; rows <= n; rows++) {
        for(let colons = 1; colons <= rows; colons++) {
        
        printline += `${rows} `;
        }

        console.log(printline);

        printline = "";
    }
}

triangleOfNumbers(6);