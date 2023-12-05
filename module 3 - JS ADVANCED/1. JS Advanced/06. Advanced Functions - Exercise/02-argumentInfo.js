function argumentInfo(...input) {

    //     Write a function that displays information about the arguments which are passed to it (type and value) and a summary about the number of each type in the following format: 
    // `{argument type}: {argument value}`

    let typesObj = {};

    input.forEach(element => {

        let type = typeof element;
        console.log(`${type}: ${element}`); // Print each argument description on a new line.

        if (!typesObj.hasOwnProperty(type)) {
            typesObj[type] = 1;
        } else {
            typesObj[type]++;
        }
    });

    // At the end print a tally with counts for each type in descending order, each on a new line in the following format: `{type} = {count}`
    // If two types have the same count, use order of appearance. 
    // Do NOT print anything for types that do not appear in the list of arguments.
    let sorted = Object.entries(typesObj);
    sorted.sort((a, b) => b[1] - a[1]);

    sorted.forEach(element => {
        console.log(`${element[0]} = ${typesObj[element[0]]}`);
    });
}

// Input: You will receive a series of arguments passed to your function:
argumentInfo('cat', 42, function () { console.log('Hello world!'); });