function charactersInRange(char1, char2) {

    let firstChar = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let lastChar = Math.max(char1.charCodeAt(), char2.charCodeAt());


    function charactersInLine(firstChar, lastChar) {

        let printline = "";

        for (let i = firstChar + 1; i < lastChar; i++) {
            printline += `${String.fromCharCode(i)} `;
        }

        return printline;
    }

    return charactersInLine(firstChar, lastChar);
}

charactersInRange('C',
    '#');