class footballTeam {
    // Constructor
    // Should have these 3 properties:
    // •	clubName - string
    // •	country - string
    // •	invitedPlayers - empty array
    // At the initialization of the FootballTeam class, the constructor accepts the clubName and country. 
    // Hint: You can add more properties to help you finish the task.
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let addedNames = [];
        // This method adds players to the invitation list. The method takes one argument: footballPlayers (array of strings).
        // Every element into this array is information about player in the format: "{name}/{age}/{playerValue}"
        // They are separated by slash symbol "/". The playerValue is in millions. Example: ["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"…]
        footballPlayers.forEach((playerInfo) => {
            let [name, age, playerValue] = playerInfo.split("/");
            age = Number(age);
            playerValue = Number(playerValue);

            // If the name of the current player is already present in invitedPlayers array, 
            // update the old playerValue only if the current one is higher.
            let existingPlayer = this.invitedPlayers.find((playerObj) => playerObj.name === name);
            if (existingPlayer) {
                if (existingPlayer.playerValue < playerValue) {
                    existingPlayer.playerValue = playerValue;
                }
                // Otherwise, should add the player, with properties: {name, age, playerValue} to the invitedPlayers array.
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
                addedNames.push(name);
            }
        });
        // In all cases, you must finally return a string in the following format:
        // "You successfully invite {name1}, {name2}, …{nameN}."
        //        Note: When returning the string, keep in mind that the different names of football Players must be:
        // •	Unique - for instance: 
        // o	" You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres " - is a correctly returned string
        // o	" You successfully invite Kylian Mbappé, Lionel Messi, Kylian Mbappé "- is not a correctly returned string
        // •	Separated by comma and space (, )
        return `You successfully invite ${addedNames.join(", ")}.`;
    }

    signContract(selectedPlayer) {
        // With this method, manager can sign contracts with player from the invited list. 
        // The method takes one argument: selectedPlayer (string).
        // Тhe string about the selected player is in the format: "{name}/{playerOffer}"
        let [name, playerOffer] = selectedPlayer.split("/");
        playerOffer = Number(playerOffer);

        // •	Check:
        // o	If the name of the current player is not present in invitedPlayers array, 
        // an error with the following message should be thrown:
        // "{name} is not invited to the selection list!"
        let existingPlayer = this.invitedPlayers.find((playerObj) => playerObj.name === name);
        if (!existingPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        // o	If the playerOffer selected by the manager for a given player is less than the value recorded in the array invitedPlayers,
        // an error with the following message should be thrown:
        // "The manager's offer is not enough to sign a contract with {name}, {priceDifference} million more are needed to sign the contract!"
        if (playerOffer < existingPlayer.playerValue) {
            // priceDifference - is the difference between playerValue and playerOffer.
            let priceDifference = existingPlayer.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        // Otherwise, if the above conditions are not met, you must replace playerValue with the string "Bought" 
        existingPlayer.playerValue = "Bought";

        // Finally, you need to return the string in the following format:
        // "Congratulations! You sign a contract with {BoughtPlayer} for {BuyingPrice} million dollars."
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {
        //With this method, we make sure that the players are young enough to sign 
        // a five-year contract with the team, a reduced-time contract, or no contract at all. The method takes two arguments: 
        // o	name (string)
        // o	age (number)
        //•	If the submitted name is not present in the invitedPlayers array, 
        // an error with the following message should be thrown: "{name} is not invited to the selection list!"
        let existingPlayer = this.invitedPlayers.find((playerObj) => playerObj.name === name);
        if (!existingPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        // •	If the age recorded in the invitedPlayers array is less than the age submitted as an argument,
        // you must check the difference between limit age and player age. 
        if (existingPlayer.age < age) {
            //o	ageDifference - is the difference between limit age and player age.
            let ageDifference = age - existingPlayer.age;

            // If the difference is less than 5 years, return the following string: 
            // "{name} will sign a contract for {ageDifference} years with {clubName} in {country}!"
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            }

            // •	 If the age difference is more than 5 years, return the following message:
            // "{name} will sign a full 5 years contract for {clubName} in {country}!"
            if (ageDifference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }

            // •	If the player age from the invitedPlayers array is greater or equal than the age submitted as an argument,
            // return the following message: "{name} is above age limit!"
        } else if (existingPlayer.age >= age) {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        //  This method returns all players, The first line shows the following message:
        // "Players list:"
        let result = "Players list:";
        // o	On the new line, display information about each player sorted in ascending order of name:
        // "Player {name}-{playerValue}"
        this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach((player) => {
                result += `\nPlayer ${player.name}-${player.playerValue}`;
            });
        return result;
    }
};


// input example :
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
