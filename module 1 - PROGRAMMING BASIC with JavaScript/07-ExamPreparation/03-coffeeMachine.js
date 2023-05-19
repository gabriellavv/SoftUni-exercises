function coffeeMachine(input) {

    let drinkType = input[0];
    let sugarOpt = input[1];
    let qty = Number(input[2]);
    let priceper1 = 0;

    if (drinkType === "Espresso") {
        switch (sugarOpt) {
            case "Without": price = 0.9 * 0.65; break;
            case "Normal": price = 1; break;
            case "Extra": price = 1.2; break;
        }
        if (qty > 5) {
            price *= 0.75;
        }
    } else if (drinkType === "Cappuccino") {
        switch (sugarOpt) {
            case "Without": price = 1 * 0.65; break;
            case "Normal": price = 1.2; break;
            case "Extra": price = 1.6; break;
        }
    } else if (drinkType === "Tea") {
        switch (sugarOpt) {
            case "Without": price = 0.5 * 0.65; break;
            case "Normal": price = 0.6; break;
            case "Extra": price = 0.7; break;
        }
    }

    let totalPrice = price * qty;

    if (totalPrice > 15){
        totalPrice *= 0.8;
    }
    console.log(`You bought ${qty} cups of ${drinkType} for ${totalPrice.toFixed(2)} lv.`);
}

coffeeMachine(["Cappuccino",
    "Normal",
    "13"])
