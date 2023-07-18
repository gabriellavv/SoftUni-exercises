function travelTime(input) {

    let destination = {}

    for (let line of input) {

        let [country, town, cost] = line.split(" > ");

        // Ако няма такава държава създаваме:
        if (!destination.hasOwnProperty(country)) {
            destination[country] = {};
            destination[country][town] = Number(cost);

            // Ако има такава държава, но няма такъв град:
        } else {
            if (!destination[country].hasOwnProperty(town)) {
                destination[country][town] = Number(cost);

                // Ако има такава държава и има такъв град проверяваме цената:
            } else {
                if (cost < destination[country][town]) {
                    destination[country][town] = Number(cost);
                }
            }
        }
    }

    // Сортираме държавите по азбучен ред:
    let sortedCountries = Array.from(Object.keys(destination)).sort((a, b) => a.localeCompare(b));

    for (let country of sortedCountries) {
        let result = `${country} -> `;

        // За всяка държава сортираме градовете по цена от най-ниска към най-висока:
        let sortedTowns = Object.keys(destination[country]).sort((town1, town2) => destination[country][town1] - destination[country][town2]);
        for (let town of sortedTowns) {
            result += `${town} -> ${destination[country][town]} `;
        }

        console.log(result);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);