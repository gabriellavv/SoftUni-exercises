function pirates(input) {

    let targetsObj = {};    // създаваме обект в който да съхраняваме таргетите си

    let command = input.shift();  // взимаме си таргетите от входа, докато не стигнем Sail
    while (command !== "Sail") {

        let target = command.split("||");
        let city = target[0];
        let population = Number(target[1]);
        let gold = Number(target[2]);

        if (!targetsObj.hasOwnProperty(city)) {     // ако в обекта нямаме такъв таргет, го създаваме
            targetsObj[city] = [0, 0];
        }

        targetsObj[city][0] += population;   // за всеки вече създаден град добавяме населението и златото
        targetsObj[city][1] += gold;

        command = input.shift();  // взимаме следващ таргет
    }

    // след като сме достигнали "Sail", е приключил предходния цикъл и сега си взимаме наново следващия ред от входа
    command = input.shift();
    while (command !== "End") {     // получаваме команди, които ще изпълняваме върху таргетите, които сме събрали в обекта, докато не получим "End"

        let events = command.split("=>");
        let action = events[0];   // действието и града винаги ще са на индекс 0 и 1, затова ги взимаме извън следващите проверки
        let town = events[1];


        if (action === "Plunder") { // ограбваме

            let people = Number(events[2]);
            let gold = Number(events[3]);

            targetsObj[town][0] -= people; // вадим по индекс, тъй като стойностите са в масив, винаги на индекс 0 е популацията и винаги на 1 е златото
            targetsObj[town][1] -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (targetsObj[town][0] <= 0 || targetsObj[town][1] <= 0) {   // ако града остане без злато или хора го изтриваме от обекта
                delete targetsObj[town];
                console.log(`${town} has been wiped off the map!`);
            }
        }

        if (action === "Prosper") {  // ако града просперира, добавяме му още злато

            let gold = Number(events[2]);

            // проверяваме дали съществува все още този град или вече е заличен и ако съществува:
            if (targetsObj.hasOwnProperty(town)) {

                if (gold < 0) { // ако във входа са ни подали негативно число за злато:
                    console.log("Gold added cannot be a negative number!");
                } else { // ако е положително го добавяме към наличното злато и печатаме съобщение:
                    targetsObj[town][1] += gold;
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${targetsObj[town][1]} gold.`);
                };
            }
        }
        command = input.shift(); // взимаме следеваща команда
    }

    // след като сме достигнали "End" проверяваме дали в обекта са ни останали още таргети:
    if (Object.keys(targetsObj).length > 0) { // ако да - печатаме колко са ни останали
        console.log(`Ahoy, Captain! There are ${Object.keys(targetsObj).length} wealthy settlements to go to:`);

        for (let key in targetsObj) { // за всеки град отпечатваме крайните му стойности
            console.log(`${key} -> Population: ${targetsObj[key][0]} citizens, Gold: ${targetsObj[key][1]} kg`);
        }
    } else { // ако не:
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]));