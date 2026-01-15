const expect = require("chai").expect;
const { petAdoptionAgency } = require("./petAdoptionAgency");

describe("petAdoptionAgency", function () {


    describe("isPetAvailableTests", function () {
        // isPetAvailable(pet, availableCount, vaccinated) -  A function that accepts three parameters: 
        //a string that represents the type of pet, 
        //a number that indicates the quantity of available pets 
        // and a boolean  that indicates whether the pets are vaccinated or not.

        // If the availableCount is less than or equal to 0, 
        // it indicates that there are currently no pets of that specific type available for adoption at the agency.
        // In this case, the function returns:
        //` Sorry, there are no ${pet}(s) available for adoption at the agency.`
        it("should return no pets", function () {
            expect(petAdoptionAgency.isPetAvailable("cat", -1, true)).to.be.equal(`Sorry, there are no cat(s) available for adoption at the agency.`);
            expect(petAdoptionAgency.isPetAvailable("cat", 0, true)).to.be.equal(`Sorry, there are no cat(s) available for adoption at the agency.`);
        });

        // If the availableCount is greater than 0, the pet is available for adoption, 
        // and the function returns one of two messages based on the vaccinated parameter:
        // 	If vaccinated is true:
        // ` Great! We have ${availableCount} vaccinated ${pet}(s) available for adoption at the agency.`
        // 	If vaccinated is false:
        // ` Great! We have ${availableCount} ${pet}(s) available for adoption, but they need vaccination.`
        it("should return correct message depending on vaccination status", function () {
            expect(petAdoptionAgency.isPetAvailable("cat", 1, true)).to.be.equal(`Great! We have 1 vaccinated cat(s) available for adoption at the agency.`);
            expect(petAdoptionAgency.isPetAvailable("cat", 1, false)).to.be.equal(`Great! We have 1 cat(s) available for adoption, but they need vaccination.`);
        });

        // There is a need for validation of the input, the pet parameter should be a string, 
        // the availableCount parameter should be an number and vaccinated should be a boolean. 
        // In case of invalid parameters, the function should throw an error: "Invalid input"
        it("should return invalid input message", function () {
            expect(() => petAdoptionAgency.isPetAvailable(1, 1, true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("cat", "1", true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("cat", 1, "true")).to.throw("Invalid input");
        });



    });

    describe("getRecommendedPetsTests", function () {
        // getRecommendedPets(petList, desiredTraits) - A function that accepts two parameters: 
        // an array of objects that stores pet objects with properties "name" and "traits" 
        //and a string representing the desired traits in a pet.

        // o	The function searches for pets in the petList that have traits matching the desiredTraits 
        // and returns a list of their names in the format:
        // `Recommended pets with the desired traits (${desiredTraits}): ${pet name}, ${pet name}`
        // If no matching pets are found, it returns: 
        // `Sorry, we currently have no recommended pets with the desired traits: ${desiredTraits}.`
        it("should return correct message", function () {
            expect(petAdoptionAgency.getRecommendedPets([{ name: "Doggy", traits: "white" }], "white")).to.be.equal(`Recommended pets with the desired traits (white): Doggy`);
            expect(petAdoptionAgency.getRecommendedPets([{ name: "Doggy", traits: "black" }], "white")).to.be.equal(`Sorry, we currently have no recommended pets with the desired traits: white.`);
        });

        //o	You need to validate the input; if petList and desiredTraits are not an array and  a string, 
        // the function should throw an error:"Invalid input"
        it("should return invalid input message", function () {
            expect(() => petAdoptionAgency.getRecommendedPets("name: Doggy, traits: white", "white")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets([{ name: "Doggy", traits: "white" }], ["white"])).to.throw("Invalid input");
        });



    });

    describe("adoptPetTests", function () {
        // -A function that accepts two parameters,both strings.

        // o	The function returns a success message in the format: 
        // `Congratulations, ${adopterName}! You have adopted ${pet} from the agency. Enjoy your time with your new furry friend!`

        it("should return a success message", function () {
            expect(petAdoptionAgency.adoptPet("Tom", "Anne")).to.be.equal(`Congratulations, Anne! You have adopted Tom from the agency. Enjoy your time with your new furry friend!`);
        });


        // STOP : 100/100

        //TO DO:
        // o	It includes input validation: if pet is not a string or adopterName is not a string, it throws an error with the message:
        // "Invalid input"   
        

    });

});
