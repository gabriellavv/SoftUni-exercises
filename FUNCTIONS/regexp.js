
// Валидиране на стринг според това дали съдържа в себе си шаблон:
let text = 'Today is 2015-05-11';
let regexp = /\d{4}-\d{2}-\d{2}/g;
let containsValidDate = regexp.test(text); // връща true/false
console.log(containsValidDate); // true




// Match: Проверка за съвпадения по шаблон: 
let text = 'Peter: 123 Mark: 456';
let regexp = /([A-Z][a-z]+): (\d+)/g;
let matches = text.match(regexp); // връща масив от съвпаденията
console.log(matches.length); // 2
console.log(matches[0]); // Peter: 123
console.log(matches[1]); // Mark: 456

// MatchAll: returns an iterator of all results matching a string against a regular expression, including capturing groups
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)]; // раздробява на масив от масиви
console.log(array[0]); // връща цялото съвпадение, после раздробено по групи и тн
// ['test1', 'e', 'st1', '1', index: 0, input:'test1test2', length: 4]



// За глобал таг:
// EXEC ведънж използван, не променя оригиналния текст, но запомня кое последно е match-нал
// и при следващо използване match-ва следващо съвпадение.
let text = 'Peter: 123 Mark: 456';
let regexp = /([A-Z][a-z]+): (\d+)/g;

let firstMatch = regexp.exec(text);
console.log(firstMatch) // (3) ['Peter: 123', 'Peter', '123', index: 0, input: 'Peter: 123 Mark: 456', groups: undefined]
console.log(firstMatch[0]) // Peter: 123
console.log(firstMatch[1]); // Peter
console.log(firstMatch[2]); // 123
// Следното влиза във firstMatch, но не е закачено на масива:
// console.log(firstMatch.index) // връща начални индекси на съвпаденията
// console.log(firstMatch.input)
// console.log(firstMatch.groups.nameOfGroup) - можем да достъпваме всички групи, или една от тях

console.log(text) // Peter: 123 Mark: 456  -------- не се променя

let secondMatch = regexp.exec(text);
console.log(secondMatch); // (3) ['Mark: 456', 'Mark', '456', index: 11, input: 'Peter: 123 Mark: 456', groups: undefined]



// Replace:
let text = 'Peter: 123 Mark: 456';
let replacement = '999';
let regexp = /\d{3}/g;
let result = text.replace(regexp, replacement);
// Peter: 999 Mark: 999


// Split:
let text = '1 2 3 4';
let regexp = /\s+/g;
let result = text.split(regexp);
console.log(result) // ['1', '2', '3', '4'];



// всички думи, без знаци в тях:
let regexp = /[^!"#$%&'*+,.\/:;=?@^_`|~\/\-\/\s]+/gm