function shopping (input) {

    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardPrice = 250;
    let cpuPrice = 0.35 * (videoCardPrice * videoCardsCount);
    let ramPrice = 0.1 * (videoCardPrice * videoCardsCount);

    let price = (videoCardPrice * videoCardsCount) + (cpuPrice * cpuCount) + (ramPrice * ramCount);

    if (videoCardsCount > cpuCount) {
        price = 0.85 * price;
    }

    if (price <= budget) {
        console.log(`You have ${(budget - price).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva more!`);
    }
}

shopping (["900", "2", "1", "3"]);