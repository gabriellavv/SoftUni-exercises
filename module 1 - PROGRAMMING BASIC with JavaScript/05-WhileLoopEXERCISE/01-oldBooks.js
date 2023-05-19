function oldBooks(input) {
    let index = 0
    let theBook = input[index++];
    let counter = 0;
    let currentBook = input[index];

    while (index < input.length) {
        
        if (currentBook === theBook) {
            console.log(`You checked ${counter} books and found it.`);
        } else if (currentBook === "No More Books") {
            console.log(`The book you search is not here! \nYou checked ${counter} books.`);
        } 
        
        counter++;
        currentBook = input[++index];
    }
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]);