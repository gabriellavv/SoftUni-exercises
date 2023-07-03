function convertToObject(string) {

    let object = JSON.parse(string);

 //   for (let key of Object.keys(object)) {
 //       console.log(`${key}: ${object[key]}`);
 //   }

    for(let [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');