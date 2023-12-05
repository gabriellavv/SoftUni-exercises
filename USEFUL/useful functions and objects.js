// средно аритметично от сбора на всички числа в масив от числа (примерно оценки):
function avgGrade(array) {
    let sum = 0;
    let counter = 0
    for (let element of array) {
        sum += element;
        counter++
    }
    return sum / counter;
}

// проверява дали определен знак от стринг (string[0]) е число, връща true/false
function isNumber(char) {
    return /^\d$/.test(char);
}

// проверява дали думата съдържа само малки и големи букви, без цифри и знаци, връща true/false
function isContainsOnlyLetters(word) {
    let transformedWord = word.toLowerCase();
    let isValidWord = true;
    for (let symbol of transformedWord) {
        let current = symbol.charCodeAt(0);
        if (!(current >= 97 && current <= 122)) {
            isValidWord = false;
            break;
        }
    }
    return isValidWord;
}
console.log(isContainsOnlyLetters("aaa6aa"));


// проверка дали дадена буква е гласна:
function vowelTest(s) {
    return (/^[aeiou]$/i).test(s);
}


// различни опции за калкулиране във функция, които достъпваме с calculate.sum/calculate.multiplication
function calculate(a, b) {
    return {
        sum: a + b,
        multiplication: a * b,
    }
}



// показва колко дни има в зададения месец в конкретната година:
function daysInAMonth(month, year) {

    let days = new Date(year, month, 0).getDate();
    console.log(days)
}



// най-голям общ делител: 2 варианта
function greatestCommonDivisorGCD(a, b) {
    if (a == 0)
        return b;
    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    return a;
}
function greatestCommonDivisorGCD(a, b) {
    let gcd = a % b;
    while (gcd !== 0) {
        a = b;
        b = gcd;
        gcd = a % b;
    }
    console.log(b);
}
console.log(greatestCommonDivisorGCD(2154, 458));  // 2
console.log(greatestCommonDivisorGCD(15, 5));      // 5


// как да вземем последния ден на даден месец:
function lastDayOfCurrentMonth() {
    let myDate = new Date(2023, 1, 1, 0, 0, 0)        // 1 февруари 2023 00:00:00
    myDate.setMonth(myDate.getMonth() + 1);             // минаваме към следващия месец

    myDate.setDate(0);   // задаваме индекс 0 от датите на настоящия месец (март), което ни връща към последния ден на предходния месец (февруари)
    console.log(myDate);  // отпечатваме вече сетнатия последен ден от месеца
}



// формулата за намиране на разстояние между 4 точки в координатна система:   
function distance(_x1, _y1, _x2, _y2) {
    let dist = Math.sqrt(((_x2 - _x1) ** 2) + ((_y2 - _y1) ** 2));
    return Number.isInteger(dist);
}


// завъртане на стойностите в масив надясно - тоест последната стойност става първа
function rotateArray(array, rotationsCount) {
    for (let i = 1; i <= rotationsCount; i++) {
        array.unshift(array.pop());
    }
    console.log(array.join(" "));
}


// сортиране на текст по възходящ и низходящ ред:
function sortAlphabeticallyAscending(textA, textB) {
    return textA.localeCompare(textB);
}
function sortAlphabeticallyDescending(textA, textB) {
    return textB.localeCompare(textA);
}


//Сортиране по дължина и после по азбучен ред: 
function sortAnArrayBy2Criteria(input) {

    let sorted = input.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length
        }
        return a.localeCompare(b);
    });

    console.log(sorted.join("\n"));
}
// Или:
array.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(array.join("\n"));


// сортиране на числа с обект като function library: 
const compareNumbers = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a,
};                                 // достъпваме с compareNumbers.ascending(arrayOfNumbers - примерно);



// HTML замяна на символи;
function escape(par) {
    return par.replace(/[&<>" –—©®™≈≠£€°]/g, (result) => {
        const map = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&quot;",
            " ": "&nbsp;",
            "-": "&ndash;",
            "—": "&mdash;",
            "©": "&copy;",
            "®": "&reg;",
            "™": "&trade;",
            "≈": "&asymp;",
            "≠": "&ne;",
            "£": "&pound;",
            "€": "&euro;",
            "°": "&deg;",
        }
        if (map[result]) {
            return map[result];
        }
        return result;
    })
}

// UNIT TESTING:
// config: in cmd -> npm init ; npm install ; npm install mocha ; npm install chai   "
// and then open configutations(launch.json):  in "args" -> the second is "bdd" and the last is "${file}";
const expect = require("chai").expect;   // assert or expect 
const {sum} = require("./04-sumOfNumbers");

describe("sum", function() {
    it("should sum the numbers in array", () => {
        expect(sum([1, 2, 3])).to.be.equal(6);
    })
});