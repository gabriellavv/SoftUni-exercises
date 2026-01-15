function playingCards(face, suit) {
    // Create a JS factory function that returns a Card object holding the card’s face and suit. 


    // Both face and suit are expected as an uppercase string.
    const validFacesArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    // Use the following UTF code literals to represent the suits:
    const validSuitsObj = {
        S: "\u2660",
        H: "\u2665",
        D: "\u2666",
        C: "\u2663",
    };

    const isCardFaceValid = validFacesArr.includes(face);
    const isCardSuitValid = Object.keys(validSuitsObj).includes(suit);

    // Throw an error if the card is initialized with an invalid face.
    if (!isCardFaceValid) {
        throw new Error("Error");
    }


    // The object also needs to have a toString() method that prints the card’s face and suit as a string.    // NOT console.log
    return {
        face,
        suit,
        toString() {
            return `${face}${validSuitsObj[suit]}`;
        }
    }
}

// The factory function takes two string parameters. The toString() method of the returned object must return a string.
console.log(playingCards('A', 'S').toString());
