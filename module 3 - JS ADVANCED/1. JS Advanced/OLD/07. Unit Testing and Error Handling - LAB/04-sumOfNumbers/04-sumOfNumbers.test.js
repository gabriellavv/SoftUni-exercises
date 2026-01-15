const expect = require("chai").expect;   // assert or expect 
const {sum} = require("./04-sumOfNumbers");



// Your tests will be supplied with a function named 'sum()'. It should meet the following requirements:
// •	Take an array of numbers as an argument
// •	Return the sum of the values of all elements inside the array

describe("sum", function() {
    it("should sum the numbers in array", () => {
        expect(sum([1, 2, 3])).to.be.equal(6);
    })
});