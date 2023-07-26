function revealWords(words, string) {

    let arrayOfWords = words.split(", ");
    let splittedString = string.split(" ");

    for(let word of arrayOfWords) {

        let searchFor = "*".repeat(word.length);
        string = string.replace(searchFor, word);
    }

    console.log(string);

}

revealWords('great', 'softuni is ***** place for learning new programming languages');