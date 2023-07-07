function makeADictionary(array) {

    let dictionaryObj = {};

    for(let element of array) {
        let currObject = JSON.parse(element);
        let objArray = Object.entries(currObject);
        let term = objArray[0][0];
        let description = objArray[0][1];
        dictionaryObj[term] = description;
    }

    let keys = Object.keys(dictionaryObj);
    let sorted = keys.sort();

    let result = {};
    for(let key of sorted) {
        result[key] = dictionaryObj[key];
        
        console.log(`Term: ${key} => Definition: ${dictionaryObj[key]}`);
    }

}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);