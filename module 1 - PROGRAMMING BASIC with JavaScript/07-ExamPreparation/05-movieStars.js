function movieStars(input) {

    let index = 0;
    let budget = Number(input[index]);

    let command = input[++index];

    while (command !== "ACTION") {

        let actor = command;
        let salary = 0;

        if (actor.length <= 15) {
            salary = Number(input[++index]);
            budget -= salary
        } else {
            salary = 0.2 * budget;
            budget -= salary;
        }

        if (budget <= 0) {
            break;
        }

        command = input[++index];

    }

    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${(Math.abs(budget)).toFixed(2)} leva for our actors.`);
    }

}

movieStars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"])
