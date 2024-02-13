const expect = require("chai").expect;
const assert = require("chai").assert;
const { movieTheater } = require("./03.movieTheater");

describe("movieTheater", function () {
    describe("ageRestrictions", function () {
        it("should work properly with G", function () {
            expect(movieTheater.ageRestrictions("G")).to.equal(`All ages admitted to watch the movie`);
        });

        it("should work properly with PG", function () {
            expect(movieTheater.ageRestrictions("PG")).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });

        it("should work properly with R", function () {
            expect(movieTheater.ageRestrictions("R")).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        });

        it("should work properly with NC-17", function () {
            expect(movieTheater.ageRestrictions("NC-17")).to.equal(`No one under 17 admitted to watch the movie`);
        });

        it("should work properly with A", function () {
            expect(movieTheater.ageRestrictions("A")).to.equal(`There are no age restrictions for this movie`);
        });

        it("should work properly with test", function () {
            expect(movieTheater.ageRestrictions("test")).to.equal(`There are no age restrictions for this movie`);
        });
    });

    describe("moneySpent", function () {
        it("should calculate the total cost correctly", function () {
            expect(movieTheater.moneySpent(2, ["Nachos"], ["Soda"])).to.equal(`The total cost for the purchase is 38.50`);
            expect(movieTheater.moneySpent(1, ["Nachos", "Nachos"], ["Water"])).to.equal(`The total cost for the purchase is 28.50`);
            expect(movieTheater.moneySpent(1, ["Popcorn"], ["Water", "Soda"])).to.equal(`The total cost for the purchase is 23.50`);
        });
        it("should apply 20% discount if the total cost is over 50", function () {
            expect(movieTheater.moneySpent(3, ["Nachos"], ["Soda"])).to.equal(`The total cost for the purchase with applied discount is 42.80`);
            expect(movieTheater.moneySpent(4, ["Nachos", "Nachos"], ["Water"])).to.equal(`The total cost for the purchase with applied discount is 58.80`);
        });
        it("should validate the input", function () {
            expect(() => movieTheater.moneySpent("3", ["Nachos"], ["Soda"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent(3, "Nachos", ["Soda"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent("3", ["Nachos"], "Soda")).to.throw("Invalid input");

        });

    });

    describe("reservation", function () {
        it("should return the row with the largest number, which has enough free seats", function () {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 5)).to.equal(2);
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 7)).to.equal(1);
        });

        it("should throw error if the input is invalid", function () {
            expect(() => movieTheater.reservation({ rowNumber: 1, freeSeats: 7 }, 5)).to.throw("Invalid input");
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], "5")).to.throw("Invalid input");
        });
    });
});
