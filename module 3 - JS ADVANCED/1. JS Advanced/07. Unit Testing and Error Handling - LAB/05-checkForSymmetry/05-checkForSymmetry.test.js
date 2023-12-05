const expect = require("chai").expect;
const { isSymmetric } = require("./05-checkForSymmetry");

// Your tests will be supplied with a function named 'isSymmetric()'. It should meet the following requirements:
// •	Take an array as an argument
// •	Return false for any input that isn’t of the correct type
// •	Return true if the input array is symmetric
// •	Otherwise, return false


describe("isSymmetric", function () {
    it("should return true for symmetric array", () => {
        expect(isSymmetric([1, 2, 2, 1])).to.true;
        expect(isSymmetric(["a", "b", "a"])).to.true;
    });

    it("should return false for non-symmetric array", () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
        expect(isSymmetric(["a", "b", "c"])).to.be.false;

    });

    it('should return false for different types of elements in array', () => {
        expect(isSymmetric([1, '1'])).to.be.false
    })

    it("should return false if the argument is not array", () => {
        expect(isSymmetric({ number: 3 })).to.be.false;
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric("not an array")).to.be.false;
        expect(isSymmetric(true)).to.be.false;
    });

    it("should return true if the argument is empty array", () => {
        expect(isSymmetric([])).to.true;
    });


});