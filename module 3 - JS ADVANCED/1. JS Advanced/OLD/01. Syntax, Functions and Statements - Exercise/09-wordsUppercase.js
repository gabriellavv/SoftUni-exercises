function wordsUppercase(string) {

let regexp = /[^!"#$%&'*+,.\/:;=?@^_`|~\/\-\/\s]+/gm
let matches = string.match(regexp);

console.log(matches.join(", ").toUpperCase());

}

wordsUppercase('Hi, how are you?');