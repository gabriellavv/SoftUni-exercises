function equalNeighbors(matrix) {

    let input = matrix.slice(0);              // копираме си матрицата
    let counter = 0;                          // създаваме си брояч за броя на еднаквите съседни елементи

    while (input.length > 0) {                // докато не изпразним копираната матрица
        let currArray = input.shift();      // изрязваме първия ред = масив
        let nextArray = input[0];             // и взимаме втория, в който ще търсим еднакви елементи


        for (let i = 0; i < currArray.length; i++) {        // за цялата дължина на текущия масив
            let currElement = currArray[i];                   // си взимаме текущ елемент
            let nextElement = currArray[i + 1];               // и следващ елемент

            if (nextElement) {                                // ако има следващ елемент
                if (currElement === nextElement) {            // проверяваме дали съвпада с натоящия елемент
                    counter++;                                // ако да увеличаваме брояча с 1;
                }
            }

            if (nextArray) {                                  // ако има следващ масив
                if (currElement === nextArray[i]) {           // проверяваме дали настоящия ни елемент съвпада с елемента на същия индекс в следващия масив
                    counter++;                                // ако да - увеличаваме брояча с 1;
                }
            }
        }
    }

    return counter;

}

console.log(equalNeighbors([        // 1
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]
));

console.log(equalNeighbors([        // 2
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]
));