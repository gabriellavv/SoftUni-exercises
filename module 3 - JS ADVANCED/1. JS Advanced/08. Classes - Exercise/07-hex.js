class Hex {
    constructor(value) {
        this.value = value;
    }


    // valueOf() This function should return the value property of the hex class.  
    valueOf() {
        return this.value;
    };

    // 	toString() This function will show its hexadecimal value starting with "0x"
    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    };

    //  plus({number}) This function should add a number or Hex object and return a new Hex object.
    plus(num) {
        if (num instanceof Hex) {
            num = num.valueOf();
        };

        let sum = this.value + num;

        return new Hex(sum);
    };

    // minus({number}) This function should subtract a number or Hex object and return a new Hex object.
    minus(num) {
        if (num instanceof Hex) {
            num = num.valueOf();
        };

        let result = this.value - num;

        return new Hex(result);
    };

    // parse({string}) Create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers.
    parse(string) {
        return parseInt(string, 16);
    };
};


// Sample input:
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
