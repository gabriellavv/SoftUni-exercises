function arrayManipulator(arrIntegers, arrStrings) {

    let numbers = arrIntegers;

    for (let i = 0; i < arrStrings.length; i++) {

        let commands = arrStrings[i].split(" ");
        let action = commands.shift();

        switch (action) {

            case "add":
                let index = Number(commands.shift());
                let element = Number(commands.shift());
                numbers.splice(index, 0, element);
                break;

            case "addMany":
                let index2 = Number(commands.shift());

                for (let i = 0; i < commands.length; i++) {

                    let currNum = Number(commands[i]);
                    numbers.splice(index2 + i, 0, currNum);
                };
                break;

            case "contains":
                let element2 = Number(commands.shift());
                console.log(numbers.indexOf(element2));
                break;

            case "remove":
                let index3 = Number(commands.shift());
                numbers.splice(index3, 1);
                break;

            case "shift":
                let positions = Number(commands.shift());

                for (let i = 0; i < positions; i++) {
                    let element = numbers.shift();
                    numbers.push(element);
                };
                break;

            case "sumPairs":
                let newArray = [];

                for (let i = 0; i < numbers.length; i += 2) {

                    if (i + 1 < numbers.length) {
                        let pairSum = numbers[i] + numbers[i + 1];
                        newArray.push(pairSum);
                    } else {
                        newArray.push(numbers[i]);
                    }
                }

                numbers = newArray;
                break;

            case "print":
                console.log(`[ ${numbers.join(", ")} ]`);
                return;
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

