function censoredWords(text, word) {

    // while (text.includes(word)) {

    //     text = text.replace(word, "*".repeat(word.length));
    // }

    // console.log(text);

    let result = text.split(word);

    console.log(result.join("*".repeat(word.length)));
}

censoredWords('A small sentence with some words', 'small');