function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let price = 0;
    let evenOrOdd = fishermen % 2 === 0 ? "even" : "odd";


    switch (season) {
        case "Spring": price = 3000;
            if (evenOrOdd === "even") {
                price *= 0.95;
            } break;
        case "Summer": price = 4200;
            if (evenOrOdd === "even") {
                price *= 0.95;
            } break;
        case "Autumn": price = 4200; break;
        case "Winter": price = 2600;
            if (evenOrOdd === "even") {
                price *= 0.95;
            } break;
    }

    if (fishermen <= 6) {
        price *= 0.9;
    } else if (fishermen <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }

    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}
    fishingBoat(["3600", "Autumn", "6"]);