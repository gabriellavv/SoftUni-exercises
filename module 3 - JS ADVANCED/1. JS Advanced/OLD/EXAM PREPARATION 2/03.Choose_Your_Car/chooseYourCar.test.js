const expect = require("chai").expect;
const assert = require("chai").assert;
const { chooseYourCar } = require("./chooseYourCar");


describe("chooseYourCar", function () {


    
    describe("choosingType", function () {

        it("should throw error if the year is invalid", function () {
            expect(() => chooseYourCar.choosingType("Sedan", "blue", 1899)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType("Sedan", "blue", 2023)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType("Sedan", "blue", 0)).to.throw("Invalid Year!");
        });

        it("should throw error if the type is different from Sedan", function () {
            expect(() => chooseYourCar.choosingType("SUV", "blue", 2000)).to.throw("This type of car is not what you are looking for.");
            expect(() => chooseYourCar.choosingType("Coupe", "blue", 2000)).to.throw("This type of car is not what you are looking for.");
        });

        it("should print correct messages", function () {
            expect(chooseYourCar.choosingType("Sedan", "blue", 2010)).to.equal("This blue Sedan meets the requirements, that you have.");
            expect(chooseYourCar.choosingType("Sedan", "blue", 2011)).to.equal("This blue Sedan meets the requirements, that you have.");
            expect(chooseYourCar.choosingType("Sedan", "blue", 2009)).to.equal("This Sedan is too old for you, especially with that blue color.");
        });
    });



    describe("brandName", function () {

        it("should remove the right element from the array", function () {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal("BMW, Peugeot");
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal("Toyota, Peugeot");
        });

        it("should throw error if the input is incorrect", function () {
            expect(() => chooseYourCar.brandName("BMW", 0)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], "1")).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw("Invalid Information!");
        });
    });



    describe("carFuelConsumption", function () {
     
        it("should return correct message", function () {
            expect(chooseYourCar.carFuelConsumption(100, 6)).to.equal("The car is efficient enough, it burns 6.00 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal("The car burns too much fuel - 8.00 liters!");
        });

        it("should throw error if the input is incorrect", function () {
            expect(() => chooseYourCar.carFuelConsumption("100", 6)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(-100, 6)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(100, "6")).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(100, -6)).to.throw("Invalid Information!");
        });
    });

});
