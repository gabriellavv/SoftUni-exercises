function storeCatalogue(arr) {

    let sorted = arr.sort((a, b) => a.localeCompare(b));

    let capitalLetter = "";

    for(let el of arr) {
        let currentLetter = el[0];

        if(currentLetter !== capitalLetter) {
            console.log(currentLetter);
            capitalLetter = currentLetter;
        }
        
        let splited = el.split(" : ");
        console.log(`  ${splited[0]}: ${splited[1]}`);
    }
}

storeCatalogue(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
);