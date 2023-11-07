function arrayManipulations(array) {

    let arrayToManipulate = array[0].split(" ");

    let commandIndex = 1;
    while (commandIndex < array.length) {
        let command = array[commandIndex++].split(" ");

        let action = command[0];

        switch (action) {
            case "Add": arrayToManipulate.push(command[1]); break;
            case "Remove":
                let numToRemove = Number(command[1]);
                function remove(a) {
                    arrayToManipulate = arrayToManipulate.filter(el => el != a);
                }
                remove(numToRemove);
                break;
            case "RemoveAt": arrayToManipulate.splice(command[1], 1); break;
            case "Insert": arrayToManipulate.splice(command[2], 0, command[1]); break;
        }
    }

    console.log(arrayToManipulate.join(" "));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);