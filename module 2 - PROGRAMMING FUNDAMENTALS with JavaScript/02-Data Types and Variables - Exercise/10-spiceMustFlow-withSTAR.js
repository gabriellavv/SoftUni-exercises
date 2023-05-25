function spiceMustFlow(startingYield) {

    let totalAmountOfSpice = 0;
    let days = 0;

    let yield = startingYield;

    while (yield >= 100) {
        days++;
        totalAmountOfSpice += yield;
        yield -= 10;

        if (totalAmountOfSpice >= 26) {
            totalAmountOfSpice -= 26;
        } else {
            totalAmountOfSpice = 0;
        }
    }

    totalAmountOfSpice -= 26;

    if (days <= 0) {
        totalAmountOfSpice = 0;
    }

    console.log(days);
    console.log(totalAmountOfSpice);
}

spiceMustFlow(450);