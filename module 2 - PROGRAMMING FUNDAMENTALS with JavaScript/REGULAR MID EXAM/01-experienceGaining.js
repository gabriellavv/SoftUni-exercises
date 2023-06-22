function expirienceGaining(input) {

    let xpNeeded = input[0];
    let battlesCount = input[1];
    let xpGained = 0;

    for(let i = 1; i < input.length - 1; i++){

        let gainForTheDay = input[i + 1]

        xpGained += gainForTheDay;

        if (i % 3 === 0) {
            xpGained += gainForTheDay * 0.15;
        }

        if (i % 5 === 0) {
            xpGained -= gainForTheDay * 0.1;
        }

        if (i % 15 === 0) {
            xpGained += gainForTheDay * 0.05;
        }

        if (xpGained >= xpNeeded) {
            console.log(`Player successfully collected his needed experience for ${i} battles.`);
            return;
        }

    }

    console.log(`Player was not able to collect the needed experience, ${(xpNeeded - xpGained).toFixed(2)} more needed.`);
}

expirienceGaining([
    500,
    5,
    50,
    100,
    200,
    100,
    30]);