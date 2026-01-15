function addAndRemoveElements(commands) {  

    let initialNumber = 1;        // получаваме начално число, което при всяка получена команда ще се повишава с 1;
    let result = [];    

    commands.forEach(command => {

        switch (command) {
            case "add": result.push(initialNumber); break;
            case "remove": result.pop(initialNumber); break;
        }

        initialNumber++;
    });


    if (result.length > 0) {
        result.forEach(element => {
            console.log(element);
        });
    } else {
        console.log("Empty");
    }
}

addAndRemoveElements(
    ['add',
        'add',
        'add',
        'add']
);