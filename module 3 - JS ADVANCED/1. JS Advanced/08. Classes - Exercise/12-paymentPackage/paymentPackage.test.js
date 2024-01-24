const assert = require("chai").assert;
const { PaymentPackage } = require("./paymentPackage");


describe("Payment Package tests", function() {

    it("should be instantiated with 2 params - a string name and number value", function() {
        let instance = new PaymentPackage("Name", 100)
        assert.equal(instance._name, "Name");
        assert.equal(instance._value, 100);
        assert.equal(instance._VAT, 20);
        assert.equal(instance._active, true);
    });


    it("should get and set the value of the name", () => {
        let instance = new PaymentPackage("Name", 100);
        assert.equal(instance.name, "Name");
        instance.name = "NewName";
        assert.equal(instance.name, "NewName");

        assert.throw(() => { instance.name = ""}, 'Name must be a non-empty string');
        assert.throw(() => { instance.name = 100}, 'Name must be a non-empty string');
    });
    


    it("should get and set the value of value", () => {
        let instance = new PaymentPackage("Name", 100);
        assert.equal(instance.value, 100);
        instance.value = 0;
        assert.equal(instance.value, 0);

        assert.throw(() => { instance.value = -100}, 'Value must be a non-negative number');
        assert.throw(() => { instance.value = "100"}, 'Value must be a non-negative number');
        assert.throw(() => { instance.value = false}, 'Value must be a non-negative number');
        assert.throw(() => { instance.value = undefined}, 'Value must be a non-negative number');
        assert.throw(() => { instance.value = null}, 'Value must be a non-negative number');
    });


    it("should get and set the value of VAT", () => {
        let instance = new PaymentPackage("Name", 100);
        assert.equal(instance.VAT, 20);
        instance.VAT = 25;
        assert.equal(instance.VAT, 25);

        assert.throw(() => { instance.VAT = -100}, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = "100"}, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = "test"}, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = false}, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = undefined}, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = null}, 'VAT must be a non-negative number');
    });


    it("should get and set the value of active", () => {
        let instance = new PaymentPackage("Name", 100);
        assert.equal(instance.active, true);
        instance.active = false;
        assert.equal(instance.active, false);

        assert.throw(() => { instance.active = 100}, 'Active status must be a boolean');
        assert.throw(() => { instance.active = "true"}, 'Active status must be a boolean');
    });


    it("toString", () => {

        function getString(name, value, active = true, VAT = 20) {
            return [ `Package: ${name}` + (active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${value}`,
            `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
        ].join("\n");
        };


        let instance = new PaymentPackage("Name", 100);
        assert.equal(instance.toString(), getString("Name", 100));

        instance.active = false;
        assert.equal(instance.toString(), getString("Name", 100, false, 20));

        instance.VAT = 100;
        assert.equal(instance.toString(), getString("Name", 100, false, 100));

        instance.name = 'Gosho';
        assert.equal(instance.toString(), getString("Gosho", 100, false, 100));

        instance.value = 2;
        assert.equal(instance.toString(), getString("Gosho", 2, false, 100));
    });

});
