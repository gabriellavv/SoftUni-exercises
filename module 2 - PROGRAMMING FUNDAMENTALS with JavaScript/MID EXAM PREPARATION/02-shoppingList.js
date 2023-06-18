function shoppingList(input) {

    let list = input[0];
    let outputList = list.split("!");

    let index = 1;
    while (index < input.length) {
        let commands = (input[index++]).split(" ");
        let command = commands[0];
        let item = commands[1];
        let newItem = commands[2];


        switch (command) {

            case "Urgent":
                if (!outputList.includes(item)) {
                    outputList.unshift(item);
                }; break;

            case "Unnecessary":
                if(outputList.includes(item)) {
                    let indexToDelete = outputList.indexOf(item, 0);
                    outputList.splice(indexToDelete, 1);
                }; break;

            case "Correct":
                if(outputList.includes(item)) {
                    let indexToDelete = outputList.indexOf(item, 0);
                    outputList.splice(indexToDelete, 1, newItem);
                }; break;

            case "Rearrange":
                if(outputList.includes(item)) {
                    let indexToDelete = outputList.indexOf(item, 0);
                    outputList.splice(indexToDelete, 1);
                    outputList.push(item);
                }; break;

            case "Go":
                console.log(outputList.join(", "));
                return;
        }
    }
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);