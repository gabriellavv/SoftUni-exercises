function starEnigma(input) {

    let scriptsCount = Number(input.shift());
    let starPattern = /[starSTAR]/g;
    let planetPattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*\->(?<soldierCount>\d+)/g
    let descriptedMessages = [];
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let script of input) {   // за всеки ред от входа

        // намираме ключа като броим символите, отговарящи на шаблона
        let key = 0;
        for (let ch of script) {
            if (ch.match(starPattern)) {
                key++;
            }
        }

        // с ключа разкодираме символите от входа и ги добавяме в нова променлива
        let descript = ""
        for (let ch of script) {
            let chCode = ch.charCodeAt(0);
            let newChar = String.fromCharCode(chCode - key);
            descript += newChar;
        }

        descriptedMessages.push(descript); // всяко разкодирано съобщение добавяме в масив, в който ще търсим съвпадения
    }


    // проверяваме по шаблон за първо съвпадение в масива с разкодирани съобщение
    let planetsMatch = planetPattern.exec(descriptedMessages);

    while (planetsMatch) {  // докато има неизползвани съвпадения

        if (planetsMatch.groups.attackType === 'A') { // проверяваме по група и разпределяме в масиви
            attackedPlanets.push(planetsMatch.groups.planet);
        } else {
            destroyedPlanets.push(planetsMatch.groups.planet)
        }
   
        planetsMatch = planetPattern.exec(descriptedMessages); // взиимаме следващо съвпадение ако има 
    }

    // сортираме по азбучен ред имената в масивите
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(x => console.log(`-> ${x}`)); // печатаме един под друг колкото елемента има в масива 

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(x => console.log(`-> ${x}`));

}


starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);