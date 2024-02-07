
// Extend the built-in Array object with additional functionality. Implement the following functionality:

(function arrayExtension() {
   
    // last() - returns the last element of the array
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    // skip(n) - returns a new array which includes all original elements, except the first n elements; n is a Number parameter
    Array.prototype.skip = function (n) {
        if (n >= 0 || n <= this.length) {
            return this.slice(n);
        }

    };

    // take(n) - returns a new array containing the first n elements from the original array; n is a Number parameter
    Array.prototype.take = function (n) {
        if (n >= 0 || n <= this.length) {
            return this.slice(0, n);
        }

    }

    // sum() - returns a sum of all array elements
    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    };

    // 	average() - returns the average of all array elements
    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})();

