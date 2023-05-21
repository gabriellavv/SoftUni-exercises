function rightPlace(string1, symbol, string2) {

    let word = string1.replace("_", symbol);

    if (word === string2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'i', 'String');