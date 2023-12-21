const expect = require("chai").expect;
const assert = require("chai").assert;
const { mathEnforcer } = require("./04-mathEnforcer");


describe("mathEnforcer", () => {
    describe("addFive", () => {
        it("should return undefined if the parameter is not a number", () => {
            assert.equal(mathEnforcer.addFive("1"), undefined, "the returned value must be undefined");
            assert.equal(mathEnforcer.addFive("Gabriela"), undefined, "the returned value must be undefined");
            assert.equal(mathEnforcer.addFive([1]), undefined, "the returned value must be undefined");
        });
        it("should return parameter + 5 if the parameter is a number", () => {
            assert.equal(mathEnforcer.addFive(1), 6, "invalid calculation");
            assert.equal(mathEnforcer.addFive(0), 5, "invalid calculation");
            assert.equal(mathEnforcer.addFive(-1), 4, "invalid calculation");
            assert.equal(mathEnforcer.addFive(1.1), 6.1, "invalid calculation");
        });
    });

    describe("subtractTen", () => {
        it("should return undefined if the parameter is not a number", () => {
            assert.equal(mathEnforcer.subtractTen("1"), undefined, "the returned value must be undefined");
            assert.equal(mathEnforcer.subtractTen("Gabriela"), undefined, "the returned value must be undefined");
            assert.equal(mathEnforcer.subtractTen([1]), undefined, "the returned value must be undefined");
        });
        it("should return parameter - 10 if the parameter is a number", () => {
            assert.equal(mathEnforcer.subtractTen(1), -9, "invalid calculation");
            assert.equal(mathEnforcer.subtractTen(0), -10, "invalid calculation");
            assert.equal(mathEnforcer.subtractTen(-1), -11, "invalid calculation");
            assert.equal(mathEnforcer.subtractTen(1.1), -8.9, "invalid calculation");
        });
    });

    describe("sum", () => {
        it("should return undefined if any of the parameters is not a number", () => {
            assert.equal(mathEnforcer.sum("1", "1"), undefined, "the returned value must be undefined");
            assert.equal(mathEnforcer.sum("1", 1), undefined, "the returned value must be undefined");
            assert.equal(mathEnforcer.sum("Gabriela", 1), undefined, "the returned value must be undefined");
            assert.equal(mathEnforcer.sum([1], 1), undefined, "the returned value must be undefined");
            assert.equal(mathEnforcer.sum(1, "1"), undefined, "the returned value must be undefined");
            assert.equal(mathEnforcer.sum(1, "Gabriela"), undefined, "the returned value must be undefined");
            assert.equal(mathEnforcer.sum(1, [1]), undefined, "the returned value must be undefined");
        });
        it("should return the sum of two parameters if they are numbers", () => {
            assert.equal(mathEnforcer.sum(1, 1), 2, "invalid calculation");
            assert.equal(mathEnforcer.sum(0, 1), 1, "invalid calculation");
            assert.equal(mathEnforcer.sum(1, 0), 1, "invalid calculation");
            assert.equal(mathEnforcer.sum(-1, 1), 0, "invalid calculation");
            assert.equal(mathEnforcer.sum(1, -1), 0, "invalid calculation");
            assert.equal(mathEnforcer.sum(1.1, 1), 2.1, "invalid calculation");
            assert.equal(mathEnforcer.sum(1, 1.1), 2.1, "invalid calculation");
            assert.equal(mathEnforcer.sum(0, 0), 0, "invalid calculation");
        });
    });
});



//o	If both parameters are numbers, the function should return their sum. 