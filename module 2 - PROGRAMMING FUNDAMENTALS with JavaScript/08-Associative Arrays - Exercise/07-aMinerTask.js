function aMinerTask(input) {

    let result = {};
 
    for( let i = 0; i < input.length - 1; i += 2) {

        let resource = input[i]
        let quantity = Number(input[i + 1]);

        if (!result.hasOwnProperty(resource)) {
            result[resource] = 0;
        }

        result[resource] += quantity;

    }
    
    for(let [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value}`);
    }
    
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);