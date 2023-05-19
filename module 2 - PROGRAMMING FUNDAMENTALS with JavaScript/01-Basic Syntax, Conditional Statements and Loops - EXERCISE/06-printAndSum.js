function printAndSum(start, end) {

    let printline = "";
    let sum = 0;

    for(let i = start; i <= end; i++) {
        printline += i + " ";
        sum += i;
    }

    console.log(printline);
    console.log(`Sum: ${sum}`);
}

printAndSum(0, 26);