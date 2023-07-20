function countStringOccurrences(text, word) {

    let splitedText = text.split(" ");
    let counter = 0;

    for( let currWord of splitedText) {
        if(currWord === word) {
            counter++
        }
    }

    console.log(counter);
}

countStringOccurrences("softuni is great place for learning new programming languages",
    "softuni");