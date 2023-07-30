function destinationMapper(input) {
// създаваме си шаблон за да вземем валидните дестинации от стринг и да ги съберем в масив:
    let pattern = /([=\/])(?<places>[A-Z][A-Za-z]{2,})\1/g; 
    let destinations = [];
    let travelPoints = 0;

    // взимаме си всяко едно съвпадение от стринга докато matches не стане null:
    let matches = pattern.exec(input);
    while(matches) {

        destinations.push(matches.groups.places) // от всяко съвпадение взимаме мястото по група и го слагаме в масива

        matches = pattern.exec(input); // взимаме следващо съвпадение
    }

    destinations.forEach(x => travelPoints += x.length); // изчисляваме travelPoints като събираме дължината на всички дестинации

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");