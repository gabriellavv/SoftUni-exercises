function replaceRepeatingChars(string) {

    let lastChar = string[0];

    let printLine = lastChar;


    for (let char of string) {

        if(char !== lastChar) {
            printLine += char;
        }

        lastChar = char;
    }

    console.log(printLine);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');