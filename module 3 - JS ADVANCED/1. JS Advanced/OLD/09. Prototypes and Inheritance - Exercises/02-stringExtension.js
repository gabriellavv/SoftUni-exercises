// Extend the built-in String object with additional functionality. Implement the following functions:

(function stringExtension() {


    // ensureStart(str) – if the current string doesn't start with the str parameter, 
    // return a new string in which str parameter appended to the beginning of the current string, 
    // otherwise returns the original string
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return `${str}${this.toString()}`;
        } else {
            return this.toString();
        };
    };


    // ensureEnd(str) – if the current string doesn't end with str parameter,
    // return a new string in which str parameter appended to the end of the current string, otherwise returns the original string
    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return `${this.toString()}${str}`;
        } else {
            return this.toString();
        };
    };


    // isEmpty() - return true if the string is empty and false otherwise
    String.prototype.isEmpty = function () {
        if (this.toString().length === 0) {
            return true;
        } else {
            return false;
        };
    };


    // truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis (three periods) to the end.
    String.prototype.truncate = function (n) {

        // If n is less than 4, return n amount of periods.
        if (n <= 3) {
            return ".".repeat(n);
        };

        // If a string is less than n characters long, return the same string. 
        if (this.toString().length <= n) {
            return this.toString();


            // If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is 
            // less than or equal to n.
        } else {
            let lastSpaceIndex = this.toString().substring(0, n - 2).lastIndexOf(" ");

            //If no space occurs anywhere in the string, return n - 3 characters and an ellipsis.
            if (lastSpaceIndex === -1) {
                return `${this.toString().substring(0, n - 3)}...`;
            } else {
                return `${this.toString().substring(0, lastSpaceIndex)}...`;
            };
        };
    };


    // format(string, …params) - static method to replace placeholders with parameters. 
    // A placeholder is a number surrounded by curly braces. 
    // If parameter index cannot be found for a certain placeholder, do not modify it. 
    // Note static methods are attached to the String object instead of its prototype. See the examples for more info.
    String.format = function(string, ...params) {
        for (let i = 0; i < params.length; i++) {
            let placeHolder = `{${i}}`;
            if (string.includes(placeHolder)) {
                string = string.replace(placeHolder, params[i]);
            };
        };

        return string.toString();
    };

})();


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
// str = String.format('jumps {0} {1}',
//     'dog');
