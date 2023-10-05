function lastKNumbersSequence(n, k) {

    let arr = [1];              // трябва да отпечатаме масив, който започва с 1
    let length = Number(n);     // да има дължина n
    let steps = Number(k);      // и всяко следващо число, което добавяме в него да е сбор от предходните K на брой числа

    for (let i = 1; i < length; i++) {      // правим цикъл, който ще допълни масива с нужния брой числа
        let nextNumber = sum(arr, steps);   // изчисляваме кое число да добавим, чрез функция, която сумира предходните k числа
        arr.push(nextNumber);               // добавяме в масива готовото число
    }


    function sum(arr, steps) {       // функцията ще изчисли сбора на последните k на брой числа в масива

        // броят стъпки: 
        //      - ако масива е по-къс от k числото, стъпките ще са колкото е дължината на масива;
        //      - ако не, ще са колкото е k числото.
        steps = arr.length < steps ? arr.length : steps;

        let result = 0;   // създаваме променлива, в която да съхраним нужната сума.

        for (let i = 1; i <= steps; i++) {      // минаваме назад през всички стъпк и сумираме;
            result += arr[arr.length - i];
        }

        return result;   // връщаме готовото число, което трябва да бъде подадено в масива.
    }

    return arr;  // връщаме вече готовия масив.
}

console.log(lastKNumbersSequence(6, 3));   // [1, 1, 2, 4, 7, 13]
console.log(lastKNumbersSequence(8, 2));   // [1, 1, 2, 3, 5, 8, 13, 21]