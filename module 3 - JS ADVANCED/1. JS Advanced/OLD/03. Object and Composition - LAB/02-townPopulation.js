function townPopulation(array) {

    let register = {};

    while (array.length) {
        let [town, population] = array.shift().split(" <-> ");

        population = Number(population);

        if (!register.hasOwnProperty(town)) {
            register[town] = population;
        } else {
            register[town] += population;
        }
    }

    for (const key in register) {
        console.log(`${key} : ${register[key]}`);
    }
}

townPopulation(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']
);

console.log("---------"); 

townPopulation(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']

);