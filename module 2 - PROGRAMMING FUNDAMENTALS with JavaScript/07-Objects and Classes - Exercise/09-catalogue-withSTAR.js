function catalogue(input) {

    let obj = {};

    for (let element of input) {
        let [key, value] = element.split(" : ");
        obj[key] = value;
    }

    let keys = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    let sortedObj = {};
    for (let key of keys) {
        sortedObj[key] = obj[key]
    }

    let currentGroup = '';
    for (let key in sortedObj) {

        if (currentGroup === key.charAt(0)) {
            console.log(`  ${key}: ${sortedObj[key]}`);
        }
        else if (currentGroup !== key.charAt(0)) {
            currentGroup = key.charAt(0);
            console.log(key.charAt(0));
            console.log(`  ${key}: ${sortedObj[key]}`);
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);