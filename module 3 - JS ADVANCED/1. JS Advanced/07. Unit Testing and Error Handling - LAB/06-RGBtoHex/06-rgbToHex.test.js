const expect = require("chai").expect
const { rgbToHexColor } = require("./06-rgbToHex");

//Your tests will be supplied with a function named 'rgbToHexColor()', which takes three arguments. It should meet the following requirements:
// •	Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
// •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// •	Return undefined if any of the input parameters are of an invalid type or not in the expected range


describe("rgbToHexColor", function () {

    it("should return white color", () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    });
    it('should return black HEX color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    })

    it("should return undefined if there is invalid argument", () => {
        expect(rgbToHexColor("255", 0, 255)).to.be.equal(undefined);
        expect(rgbToHexColor(263, 0, 255)).to.be.equal(undefined);
        expect(rgbToHexColor(221.5, 0, 255)).to.be.equal(undefined);
        expect(rgbToHexColor(-1, 0, 255)).to.be.equal(undefined);
    });

    it("should return invalid if there are not 3 arguments", () => {
        expect(rgbToHexColor(255, 255)).to.be.equal(undefined);
    });

});