function stringSubstring(word, text) {

    let wordToCheck = word.toLowerCase();
    let textToArray = text.split(" ");

    for(let element of textToArray) {
        if(element.toLowerCase() === wordToCheck) {
            console.log(word);
            return;
        }
    } 

    console.log(`${word} not found!`);
}

stringSubstring('javascript', 'JavaScript is the best programming language');