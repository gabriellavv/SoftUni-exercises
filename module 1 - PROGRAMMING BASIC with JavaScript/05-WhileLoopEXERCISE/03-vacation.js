function vacation(input) {

    let index = 0
    let vacationPrice = Number(input[index++]);
    let moneyOnHand = Number(input[index++]);
    let action = "";
    let actionSum = 0;
    let days = 0;
    let spendCounter = 0;

    while (index < input.length) {
        action = input[index++];
        actionSum = Number(input[index++]);

        if (action === "spend") {
            moneyOnHand -= actionSum;
            spendCounter++;
            if (moneyOnHand < 0) {
                moneyOnHand = 0;
            }
        } else if (action === "save") {
            moneyOnHand += actionSum;
            spendCounter = 0;
        }

        days++;

        if (spendCounter >= 5) {
            console.log(`You can't save the money.`);
            console.log(days);
            return;
        }
        if (moneyOnHand >= vacationPrice) {
            console.log(`You saved the money for ${days} days.`);
            return;
        }
    }
}

vacation
(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])
