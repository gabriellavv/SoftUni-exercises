const expect = require("chai").expect;
const { workforceManagement } = require("./workforceManagement");

describe("workforceManagement", function () {

    describe("recruitStaffTests", function () {
        it("should...", function () {
            expect(() => workforceManagement.recruitStaff("Gabi", "Manager", 10)).to.throw("We are not currently hiring for this role.");
            expect(workforceManagement.recruitStaff("Gabi", "Developer", 10)).to.equal("Gabi has been successfully recruited for the role of Developer.");
            expect(workforceManagement.recruitStaff("Gabi", "Developer", 4)).to.equal("Gabi has been successfully recruited for the role of Developer.");
            expect(workforceManagement.recruitStaff("Gabi", "Developer", 3)).to.equal("Gabi is not suitable for this role.");
        })
    });

    describe("computeWagesTest", function () {
        it("should...", function () {
            expect(workforceManagement.computeWages(5)).to.equals(90);
            expect(workforceManagement.computeWages(40)).to.equals(720);
            expect(workforceManagement.computeWages(160)).to.equals(2880);
            expect(workforceManagement.computeWages(161)).to.equals(4398);
            expect(workforceManagement.computeWages(0)).to.equals(0);
            expect(() => workforceManagement.computeWages(-1)).to.throw("Invalid hours");
        })
    });

    describe("dismissEmployeeTests", function () {
        it('should dismiss an employee from the workers', () => {
            const workers = ["A", "B", "C"];
            expect(workforceManagement.dismissEmployee(workers, 1)).to.equals("A, C");
        });

        it('should throw an error for invalid input', () => {
            const workers = ["A", "B", "C"];
            expect(() => workforceManagement.dismissEmployee(workers, -1)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(workers, 3)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee("employees", 1)).to.throw("Invalid input");
        });
    })


});