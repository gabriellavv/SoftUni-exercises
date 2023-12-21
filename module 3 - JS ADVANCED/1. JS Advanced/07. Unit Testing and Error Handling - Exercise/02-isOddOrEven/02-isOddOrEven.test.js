const expect = require("chai").expect;
const { isOddOrEven } = require("./02-isOddOrEven");

describe("isOddOrEven", () => {
    it("should return undefined if the passed parameter is not a string", () => {
        expect(isOddOrEven(14234)).to.be.undefined;
        expect(isOddOrEven(["1", "2", "3", "4"])).to.be.undefined;
        expect(isOddOrEven(NaN)).to.be.undefined;
    });
    
    it("should return even if the string length is even", () => {
        expect(isOddOrEven("aaaa")).to.be.equal("even");
    });
    
    it("should return odd if the string length is odd", () => {
        expect(isOddOrEven("aaa")).to.be.equal("odd");
    });
    
})