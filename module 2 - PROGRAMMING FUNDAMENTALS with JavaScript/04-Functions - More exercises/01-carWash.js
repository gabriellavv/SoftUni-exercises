function carWash(input) {

    let clean = 0;

    let index = 0;
    while (index < input.length) {

        let currAction = input[index++];

        switch(currAction) {
            case "soap": clean += 10; break;
            case "water": clean *= 1.2; break;
            case "vacuum cleaner": clean *= 1.25; break;
            case "mud": clean *= 0.9; break;
        }
    }

    console.log(`The car is ${clean.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);