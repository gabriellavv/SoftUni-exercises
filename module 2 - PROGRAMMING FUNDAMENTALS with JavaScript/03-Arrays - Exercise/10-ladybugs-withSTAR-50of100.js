function ladybugs(input) {

    let fieldSize = Number(input[0]);
    let fieldCells = [];

    for (let i = 0; i < fieldSize; i++) {
        fieldCells.push(0);
    }

    let ladybugsInitialPositions = input[1].split(" ");

    for (let i = 0; i < ladybugsInitialPositions.length; i++) {
        fieldCells[Number(ladybugsInitialPositions[i])] = 1;
    }

    for (let i = 2; i < input.length; i++) {

        let commands = input[i];
        let splitCommands = commands.split(" ");

        let bugIndex = Number(splitCommands[0]);
        let direction = splitCommands[1];
        let length = Number(splitCommands[2]);

        fieldCells[bugIndex] = 0;

        if (direction === "right") {

            if (fieldCells[bugIndex + length] === 0) {
                fieldCells[bugIndex + length] = 1;
            }

            if (fieldCells[bugIndex + length] === 1) {

                fieldCells[bugIndex + length * 2] = 1;
            }

        } else {

            if (fieldCells[bugIndex - length] === 0) {
                fieldCells[bugIndex - length] = 1;
            }

            if (fieldCells[bugIndex - length] === 1) {

                fieldCells[bugIndex - length * 2] = 1;
            }
        }
    }

    let finalPrintLine = "";

    for (let i = 0; i < fieldSize; i++) {
        finalPrintLine += `${fieldCells[i]} `
    }

    console.log(finalPrintLine);
}

ladybugs([5, '3',
    '3 left 2',
    '1 left -2']);