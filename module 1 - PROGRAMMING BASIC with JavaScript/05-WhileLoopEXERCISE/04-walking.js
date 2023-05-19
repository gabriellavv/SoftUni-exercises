function walking(input) {

    let index = 0;
    let stepCounter = 0;

    while (index < input.length) {

        if (input[index] === "Going home") {
            stepCounter += Number(input[++index]);
            if (stepCounter >= 10000) {
                console.log(`Goal reached! Good job! \n${stepCounter - 10000} steps over the goal!`);
            } else {
            console.log(`${10000 - stepCounter} more steps to reach goal.`);
            }
            return;
        }
        stepCounter += Number(input[index++]);

        if (stepCounter >= 10000) {
            console.log(`Goal reached! Good job! \n${stepCounter - 10000} steps over the goal!`);
            return;
        }

    }
}

walking(["1500",

"3000",

"250",

"1548","2000", "Going home", "2000"]);