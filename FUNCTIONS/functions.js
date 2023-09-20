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