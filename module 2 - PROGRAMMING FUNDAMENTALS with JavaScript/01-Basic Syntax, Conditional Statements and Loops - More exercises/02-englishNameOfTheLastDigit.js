function englishNameOfTheLastDigit(number) {

    let numberToString = String(number);

    let index = 0;
    let lastNumber = 0;
    while(index < numberToString.length) {
        lastNumber = Number(numberToString[index]);
        index++;
    }

    let printline = "";

    switch(lastNumber) {
        case 1: printline = "one"; break;
        case 2: printline = "two"; break;
        case 3: printline = "three"; break;
        case 4: printline = "four"; break;
        case 5: printline = "five"; break;
        case 6: printline = "six"; break;
        case 7: printline = "seven"; break;
        case 8: printline = "eight"; break;
        case 9: printline = "nine"; break;
        case 0: printline = "zero"; break;
    }

    console.log(printline);
    }

englishNameOfTheLastDigit(1);