function train(array) {

    let wagons = array.shift().split(" ").map(Number);

    let maxCapacity = Number(array.shift());

    for (let command of array) {

        command = command.split(" ");

        if (command.length === 2) {
            wagons.push(Number(command[1]));
        } else {
            let neededSpace = Number(command[0]);

            for (let i = 0; i < wagons.length; i++) {
                let currWagon = wagons[i];

                if (currWagon + neededSpace <= maxCapacity) {
                    wagons[i] += neededSpace;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "))
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);