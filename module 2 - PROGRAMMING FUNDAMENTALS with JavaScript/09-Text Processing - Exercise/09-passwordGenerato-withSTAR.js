function passwordGenerator(array) {

    let result = array[0].concat(array[1]).split("");
    let string = array[2].toUpperCase().split("");   // стринг от символи, с които трябва да заместваме гласните в result

    for(let i = 0; i < result.length; i++) {     // взимаме всяка буква от резултата
        let currentChar = result[i];

        if ((/^[aeiou]$/i).test(currentChar)) {   // проверяваме дали е главна и ако е:

            let currReplaceSymbol = string.shift();     // взимаме първия от символите, с които трябва да заменяме
            result[i] = currReplaceSymbol;              // заменяме
            string.push(currReplaceSymbol);             // връшаме символа най-отрзад в стринга за замяна
        }
    }

    console.log(`Your generated password is ${result.reverse().join("")}`);
}

passwordGenerator([ 'ilovepizza', 'ihatevegetables', 'orange' ]);