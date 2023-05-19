function godzillaVsKong (input) {

    let budget = Number(input[0]);
    let people = Number(input[1]);
    let pricePerPerson = Number(input[2]);

    let decor = 0.1 * budget;

    if (people > 150) {
        pricePerPerson = 0.9 * pricePerPerson
    }

    let totalCosts = decor + people*pricePerPerson;

    if (totalCosts > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCosts - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCosts).toFixed(2)} leva left.`);
    }
}

godzillaVsKong (["9587.88", "222", "55.68"]);