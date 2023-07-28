function race2(input) {

    let participantsArr = input.shift().split(", ");  // взимаме си всички участници от първия ред

    // създаваме обект и го пълним с имената на участниците
    let participantsObj = {};
    for (let person of participantsArr) {
        participantsObj[person] = 0;
    }

    // започваме да въртим по всеки един ред и да търсим съвпадения по шаблоните
    let lettersPattern = /[A-Za-z]/g;
    let diggitPattern = /[0-9]/g;
    let currentLine = input.shift();
    while(currentLine !== 'end of race'){

        let currentName = currentLine.match(lettersPattern).join("");  // извличаме си имената по шаблона

        let distance = currentLine.match(diggitPattern); // масив от всички числа
        let currentDistance = 0;
        distance.map(d => currentDistance += Number(d));  // за всеки елемент от масива: обръщаме в число и добавяме към currentDistance;

        // Ако имаме такъв състезател в обекта добавяме дистанцията му:
        if(participantsObj.hasOwnProperty(currentName)) {
            participantsObj[currentName] += currentDistance;
        }

        currentLine = input.shift() // след като сме обработили реда взимаме следващ и завъртаме цикъла
    }

    // Сортираме:
    let sorted = Object.entries(participantsObj); // обръщаме обекта в масив
    sorted.sort((kvpA, kvpB) => kvpB[1] - kvpA[1]); // сортираме по дистанция от най-голяма към най-малка

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

race2(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);