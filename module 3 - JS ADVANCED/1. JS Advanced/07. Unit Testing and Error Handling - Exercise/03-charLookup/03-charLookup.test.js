const expect = require("chai").expect;
const { lookupChar } = require("./03-charLookup");

describe("lookupChar", () => {
    it("should return undefined if any of the parameters is not valid", () => {
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar(true, 1)).to.be.undefined;
        expect(lookupChar(["a"], 1)).to.be.undefined;
        expect(lookupChar("a", "1")).to.be.undefined;
        expect(lookupChar("a", "a")).to.be.undefined;
        expect(lookupChar("a", [1])).to.be.undefined;
        expect(lookupChar("a", false)).to.be.undefined;
        expect(lookupChar("abc", 2.2)).to.be.undefined;
    });
    
    it("should return `Incorrect index` if the index is negative number or it is bigger than or equal to the string length", () => {
        expect(lookupChar("abc", -1)).to.equal("Incorrect index");
        expect(lookupChar("abc", 3)).to.equal("Incorrect index");
    });

    it("should return the character at the specified index in the string if both parameters are correct", () => {
        expect(lookupChar("abc", 0)).to.equal("a");
        expect(lookupChar("abc", 2)).to.equal("c");
    })
});



//o	If both parameters have correct types and values - return the character at the specified index in the string.