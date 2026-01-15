function printDeckOfCards(array) {
    // Write a function that takes a deck of cards as an array of strings and prints them as a sequence of cards (space separated).
    // Use the solution from the previous task to generate the cards:

    function createCard(face, suit) {
        const validFacesArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const validSuitsObj = {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663",
        };

        const isCardFaceValid = validFacesArr.includes(face);
        const isCardSuitValid = Object.keys(validSuitsObj).includes(suit);

        // Print `Invalid card: ${card}` when an invalid card definition is passed as input:
        if (!isCardFaceValid || !isCardSuitValid) {
            console.log(`Invalid card: ${face + suit}`);
            resultIsValidForPrinting = false;
            return;
        }

        return {
            face,
            suit,
            toString() {
                return `${face}${validSuitsObj[suit]}`;
            }
        }
    }


    // --------------------------------

    // The function takes an array of strings as a parameter. Print the list of cards as string, separated by space.
    let result = [];
    let resultIsValidForPrinting = true;

    array.forEach(element => {
        let face = element.substring(0, element.length - 1);
        let suit = element.substring(element.length - 1);;
        let card = createCard(face, suit)
        result.push(card);
    });

    if (resultIsValidForPrinting) {
        console.log(result.join(" "));
    }


}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
