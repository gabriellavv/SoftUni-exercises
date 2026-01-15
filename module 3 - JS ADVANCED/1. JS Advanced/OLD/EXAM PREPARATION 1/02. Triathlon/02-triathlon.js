class Triathlon {

    // The constructor has 3 properties:
    // •	competitionName – a string
    // •	participants – an empty object
    // •	listOfFinalists – an empty array 

    // At the initialization of the Triathlon class, the constructor accepts only one parameter competitionName which is a string! 
    // The participants property is an object, representing a key-value pair of a participant name and its gender. 
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }


    // Methods 

    // addParticipant (participantName, participantGender)
    // This method adds a new participant to the participants object. The method accepts 2 arguments:
    // •	participantName – a string
    // •	participantGender – a string
    addParticipant(participantName, participantGender) {
        // If the participant exists in the participants object, return the following message:
        // `${participantName} has already been added to the list` 
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;

            // Otherwise, add the new participant to the participants object in the following format {‘Peter’ : ‘male’} and return the following message:
            // `A new participant has been added - ${participantName}`
        } else {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`
        }
    }

    //     completeness (participantName, condition)
    //  Accept 2 arguments: 
    // •	participantName – a string
    // •	condition – a number (0 – 100)
    completeness(participantName, condition) {
        // If the participant doesn’t exist in the participants object, throw new Error:
        // `${participantName} is not in the current participants list`
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`)
        }

        // There are three disciplines in the triathlon and each requires the participant condition to be at least 30 for a discipline to be completed.
        // If the participant exists in the participants object but his condition is lower than 30, throw new Error: 
        // `${participantName} is not well prepared and cannot finish any discipline`  
        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }


        // Afterwards, find how many disciplines is the participant able to complete depending on his condition (condition divided by 30). 
        let completedCount = Math.floor(condition / 30);

        // If they completed only one or two disciplines, return the following message:
        // `${participantName} could only complete ${completedCount} of the disciplines`
        if (completedCount > 0 && completedCount < 3) {
            return `${participantName} could only complete ${completedCount} of the disciplines`

            // Otherwise extract the participant from the participants object 
            // and add him to the list of finalists in the following format: { participantName, participantGender }
        } else {
            let participantGender = this.participants[participantName]

            this.listOfFinalists.push({
                name: participantName,
                gender: participantGender,
            });

            delete this.participants[participantName];

            // Return the following message:
            // `Congratulations, ${participantName} finished the whole competition` 
            return `Congratulations, ${participantName} finished the whole competition`
        }
    }


    //     rewarding (participantName)
    // Accept 1 argument:
    // •	participantName – a string
    rewarding(participantName) {
        // If the participantName is not present in the list of finalists, return the following message:
        // `${participantName} is not in the current finalists list`
        let completedBoolean = this.listOfFinalists.some(
            (finalistObj) => finalistObj.name === participantName
        )

        if (!completedBoolean) {
            return `${participantName} is not in the current finalists list`;

            // Otherwise, return the following message:
            // `${participantName} was rewarded with a trophy for his performance`  
        } else {
            return `${participantName} was rewarded with a trophy for his performance`
        }
    }


    //    showRecord (criteria)
    // Accept 1 argument:
    // •	criteria – a string
    // This method returns information based on the criteria. 
    // The three possible types of criteria are: "male", "female" or "all".
    showRecord(criteria) {

        // If the list of finalists is empty, return the following message: 
        // `There are no finalists in this competition`
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        }

        // If there are no finalists with the given criteria, return: 
        // `There are no ${participantGender}'s that finished the competition`
        if (criteria === "male" || criteria === "female") {
            let finalistsByGender = this.listOfFinalists.filter(
                (finalist) => finalist.gender === criteria
            );
            if (finalistsByGender.length === 0) {
                return `There are no ${criteria}'s that finished the competition`;

                // If there are finalists with the given criteria, return a message with the firstly added participant in the following format:
                // `${participantName} is the first ${criteria} that finished the ${competitionName} triathlon`;
            } else {
                return `${finalistsByGender[0].name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }


            // Otherwise if the criteria is all, return all finalists from the list of finalists array in following format:
        } else if (criteria === "all") {
            // •	On first line show the following message:
            // `List of all ${competitionName} finalists:`
            let result = [`List of all ${this.competitionName} finalists:`]

            // •	On the following lines, display the names of each finalist sorted  in ascending order: `${participantName}`
            let sortedFinalists = this.listOfFinalists.sort((a, b) =>
                a.name.localeCompare(b.name));
            sortedFinalists.forEach((finalist) => {
                result.push(finalist.name);
            });

            return result.join("\n");
        }
    }
}