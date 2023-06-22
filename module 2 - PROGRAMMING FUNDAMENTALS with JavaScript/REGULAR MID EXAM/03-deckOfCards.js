function deckOfCards(input) {

    let listOfCards = input.shift().split(", ");
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {

        let commands = (input[i]).split(", ");
        let action = commands[0];
        let cardName = commands[1];
        switch (action) {

            case "Add":

                if (listOfCards.includes(cardName)) {
                    console.log("Card is already in the deck");
                } else {
                    listOfCards.push(cardName);
                    console.log("Card successfully added");
                }; break;

            case "Remove":

                if (listOfCards.includes(cardName)) {
                    let indexToDelete = listOfCards.indexOf(cardName, 0);
                    listOfCards.splice(indexToDelete, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Card not found");
                }; break;



            case "Remove At":
                let indexToDelete = Number(cardName);
                if (indexToDelete >= 0 && indexToDelete < listOfCards.length) {
                    listOfCards.splice(indexToDelete, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Index out of range");
                }; break;

            case "Insert":
                let indexToOperate = Number(cardName);
                let insertCardName = commands[2];

                if (indexToOperate >= 0 && indexToOperate < listOfCards.length) {
                    if (listOfCards.includes(insertCardName)) {
                        console.log("Card is already added");
                    } else {
                        listOfCards.splice(indexToOperate, 0, insertCardName);
                        console.log("Card successfully added");
                    }
                } else {
                    console.log("Index out of range");
                }; break;
        }

    }

    console.log(listOfCards.join(", "));

}

deckOfCards([
    "Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"
]);