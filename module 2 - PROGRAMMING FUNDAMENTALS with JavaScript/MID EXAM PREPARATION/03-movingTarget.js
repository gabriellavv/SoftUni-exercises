function movingTarget(input) {

    let targets = input[0].split(" ").map(Number);

    let index = 1;
    while (index < input.length) {

        let commands = (input[index++]).split(" ");
        let action = commands[0];
        let indexOfAction = Number(commands[1]);
        let actionValue = Number(commands[2]);

        switch (action) {

            case "Shoot":
                if (indexOfAction < targets.length && indexOfAction > -1) {
                    let targetValue = targets[indexOfAction] - actionValue;

                    if (targetValue <= 0) {
                        targets.splice(indexOfAction, 1);
                    } else {
                        targets.splice(indexOfAction, 1, targetValue);
                    }
                }; break;

            case "Add":
                if (indexOfAction >= 0 && indexOfAction < targets.length) {
                    targets.splice(indexOfAction, 0, actionValue);
                } else {
                    console.log("Invalid placement!");
                }; break;

            case "Strike":
                if (indexOfAction < targets.length && indexOfAction > -1) {

                    let startIndex = indexOfAction - actionValue;
                    let endIndex = indexOfAction + actionValue;
                    let deleteCount = endIndex - startIndex + 1

                    if (startIndex > -1 && endIndex < targets.length) {
                        targets.splice(startIndex, deleteCount);
                    } else {
                        console.log("Strike missed!");
                    }
                }; break;

            case "End":
                console.log(targets.join("|"));
                return;
        }

    }

}

movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);