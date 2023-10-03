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
    let myDate = new Date (2023, 1, 1, 0, 0 , 0)        // 1 февруари 2023 00:00:00
    myDate.setMonth(myDate.getMonth() + 1);             // минаваме към следващия месец

    myDate.setDate(0);   // задаваме индекс 0 от датите на настоящия месец (март), което ни връща към последния ден на предходния месец (февруари)
    console.log(myDate);  // отпечатваме вече сетнатия последен ден от месеца
}



// формулата за намиране на разстояние между 4 точки в координатна система:   
function distance(_x1, _y1, _x2, _y2) {
        let dist = Math.sqrt(((_x2 - _x1) ** 2) + ((_y2 - _y1) ** 2));
        return Number.isInteger(dist);
    }