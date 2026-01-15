function cars(arrayOfCommands) {
    //  Write a closure that can create and modify objects.

    // All created objects should be kept and be accessible by name.
    let objectOfCars = {};

    arrayOfCommands.forEach(command => {

        let tokens = command.split(" ");
        let action = tokens[0];
        let name = tokens[1];

        switch (action) {

            // You should support the following functionality:

            case "create":   // •	create <name> - creates an object with the supplied <name>
                if (!tokens[2]) {
                    objectOfCars[name] = {};
                } else {  // •	create <name> inherits <parentName>
                    objectOfCars[name] = {}; // creates an object with the given <name> 

                    // that inherits from the parent object with the <parentName>
                    let currentCarObj = objectOfCars[name];
                    const parentName = tokens[3]; 
                    currentCarObj = Object.setPrototypeOf(currentCarObj, objectOfCars[parentName]);
                } break;


            case "set": // •	set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.
                let key = tokens[2];
                let value = tokens[3];
                objectOfCars[name][key] = value;
                break;


            case "print": // •	print <name> - 
                let carToPrint = objectOfCars[name];   // prints the object with the supplied <name>
                let printLine = "";
                for (let key in carToPrint) { // in the format "<key1>:<value1>,<key2>:<value2>…" - the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.
                    printLine += `${key}:${carToPrint[key]},`    
                }
                console.log(printLine.slice(0, -1));   // -1 за да махнем последната запетайка от стринга
                break; 
        }
    });
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);