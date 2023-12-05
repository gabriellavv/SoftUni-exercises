const expect = require("chai").expect;
const { createCalculator } = require("./07-addSubtract");

// •	Return a module (object), containing the functions add(), subtract() and get() as properties
// •	Keep an internal sum that can’t be modified from the outside
// •	The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
// •	The function get() returns the value of the internal sum


describe('createCalculator', () => {
    it('add number should work', () => {
        const calculator = createCalculator()
        calculator.add(1)
        const expectResult = 1
        const actualResult = calculator.get()
        expect(actualResult).to.be.equal(expectResult)
    })
    it('subtract number should work', () => {
        const calculator = createCalculator()
        calculator.subtract(1)
        const expectResult = -1
        const actualResult = calculator.get()
        expect(actualResult).to.be.equal(expectResult)
    })
    it('add and subtract multiple numbers should work', () => {
        const calculator = createCalculator()
        calculator.add(1)
        calculator.subtract(1)
        calculator.add(2)
        calculator.subtract(5)
        const expectResult = -3
        const actualResult = calculator.get()
        expect(actualResult).to.be.equal(expectResult)
    })
    it('add number as string should work', () => {
        const calculator = createCalculator()
        calculator.add('1')
        const expectResult = 1
        const actualResult = calculator.get()
        expect(actualResult).to.be.equal(expectResult)
    })
    it('add and subtract multiple numbers and string should return NaN', () => {
        const calculator = createCalculator()
        calculator.add('a')
        calculator.subtract(1)
        calculator.add('2')
        calculator.subtract(5)
        const actualResult = calculator.get()
        // eslint-disable-next-line no-unused-expressions
        expect(actualResult).to.be.NaN
    })
    it('should return module(object)', () => {
        const calculator = createCalculator()
        expect(typeof calculator).to.equals('object')
    })
})