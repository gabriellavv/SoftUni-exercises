const expect = require("chai").expect;
const { petAdoptionAgency } = require("./petAdoptionAgency");

describe("petAdoptionAgency", function () {

    // 1
    describe("isPetAvailableTests", () => {
        it("returns Invalid input", () => {
            expect(() => petAdoptionAgency.isPetAvailable(4, 1, true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable(["cat"], 1, true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable({ cat: "cat" }, 1, true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable(false, 1, true)).to.throw("Invalid input");

            expect(() => petAdoptionAgency.isPetAvailable("cat", "1", true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("cat", [1], true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("cat", { count: 1 }, true)).to.throw("Invalid input");

            expect(() => petAdoptionAgency.isPetAvailable("cat", 1, "true")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("cat", 1, [true])).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("cat", 1, { boolean: true })).to.throw("Invalid input");
        });

        it("returns no pets available", () => {
            expect(petAdoptionAgency.isPetAvailable("cat", -2, true)).to.be.equal(`Sorry, there are no cat(s) available for adoption at the agency.`);
            expect(petAdoptionAgency.isPetAvailable("cat", -2.1, true)).to.be.equal(`Sorry, there are no cat(s) available for adoption at the agency.`);
            expect(petAdoptionAgency.isPetAvailable("cat", 0, true)).to.be.equal(`Sorry, there are no cat(s) available for adoption at the agency.`);
        });

        it("returns vaccinated pets", () => {
            expect(petAdoptionAgency.isPetAvailable("cat", 1, true)).to.be.equal(`Great! We have 1 vaccinated cat(s) available for adoption at the agency.`);
        });

        it("returns pets without vaccination", () => {
            expect(petAdoptionAgency.isPetAvailable("cat", 1, false)).to.be.equal(`Great! We have 1 cat(s) available for adoption, but they need vaccination.`);
        });
    });


    // 2
    describe("getRecommendedPets", () => {

        it("returns Invalid input", () => {
            expect(() => petAdoptionAgency.getRecommendedPets("Doggy", "white")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets(1, "white")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets({ name: "Doggy", traits: "white" }, "white")).to.throw("Invalid input");

            expect(() => petAdoptionAgency.getRecommendedPets([{ name: "Doggy", traits: "white" }], 1)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets([{ name: "Doggy", traits: "white" }], true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets([{ name: "Doggy", traits: "white" }], ["white", "black"])).to.throw("Invalid input");
        });

        it("returns no pets with the desired traits", () => {
            expect(petAdoptionAgency.getRecommendedPets([{ name: "Doggy", traits: "black" }], "white")).to.equal(`Sorry, we currently have no recommended pets with the desired traits: white.`);
        });

        it("returns count of pets with the desired traits", () => {
            expect(petAdoptionAgency.getRecommendedPets([{ name: "Doggy", traits: "white" }], "white")).to.equal(`Recommended pets with the desired traits (white): Doggy`);
        });
    });



    // 3

    describe("adoptPet", () => {

        it("returns Invalid input", () => {
            expect(() => petAdoptionAgency.adoptPet(["Catty"], "Gabriela")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet(1, "Gabriela")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet({name: "Catty"}, "Gabriela")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet(false, "Gabriela")).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet(undefined, "Gabriela")).to.throw("Invalid input");

            expect(() => petAdoptionAgency.adoptPet("Catty", ["Gabriela"])).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet("Catty", 1)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet("Catty", {name: "Gabriela"})).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet("Catty", false)).to.throw("Invalid input");
        });

        it("returns congratulations on adopted pet", () => {
            expect(petAdoptionAgency.adoptPet("Catty", "Gabriela")).to.be.equal(`Congratulations, Gabriela! You have adopted Catty from the agency. Enjoy your time with your new furry friend!`);
        });
    });




});

