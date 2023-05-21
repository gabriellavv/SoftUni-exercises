function reverseString(input) {

    let inputToString = input;
    let index = inputToString.length;
    let printLine = "";

    for(let i = index - 1; i >= 0; i--) {
        printLine += inputToString[i];
    }
    
    console.log(printLine);
}

reverseString("Hello");