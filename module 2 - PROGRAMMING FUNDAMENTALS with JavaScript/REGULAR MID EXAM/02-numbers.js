function numbers(input) {

    let sequence = input[0].split(" ").map(Number);

    let index = 1;
    while (index < input.length) {

        let commands = (input[index++]).split(" ");
        let action = commands[0];
        let value = Number(commands[1]);
        let replacement = Number(commands[2]);

        switch (action) {

            case "Add":
                sequence.push(value); break;

            case "Remove":
                if (sequence.includes(value)) {
                    let indexToDelete = sequence.indexOf(value, 0);
                    sequence.splice(indexToDelete, 1);
                }; break;

            case "Replace":
                if (sequence.includes(value)) {
                    let indexToDelete = sequence.indexOf(value, 0);
                    sequence.splice(indexToDelete, 1, replacement);
                }; break;

            case "Collapse":
                sequence = sequence.filter(x => x >= value); break;

            case "Finish":
                console.log(sequence.join(" "));
                return;
        }
    }
}

numbers([
    "1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"]);