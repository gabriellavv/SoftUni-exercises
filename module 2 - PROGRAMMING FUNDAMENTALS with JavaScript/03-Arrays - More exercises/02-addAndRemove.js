function addAndRemove(array) {

    let initialNum = 0;
    let printArray = [];

    let index = 0;
    while (index < array.length) {

        initialNum++;
        let command = array[index];

        if (command === "add") {
            printArray.push(initialNum);
        } else {
            printArray.pop();
        }

        index++;
    }

    if(printArray.length < 1) {
        console.log("Empty");
    } else {
    console.log(printArray.join(" "));
    }
}

addAndRemove(['remove', 'remove', 'remove']);