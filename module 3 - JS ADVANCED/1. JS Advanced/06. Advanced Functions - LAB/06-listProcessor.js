function listProcessor(commands) {

    // Using a closure, create an inner object to process list commands:
    const process = (() => {

        let listOfNames = [];

        const add = string => listOfNames.push(string);
        const remove = string => listOfNames = listOfNames.filter(name => name !== string);
        const print = () => console.log(listOfNames.join(","));
        
        return {
            add,
            remove,
            print,
        }

    })();

    // For every print command - you should print on the console the inner collection joined by ",":
    commands.forEach(element => {
        let [action, command] = element.split(" ");
        process[action](command);
    });


}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);


