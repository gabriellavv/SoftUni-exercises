function newHouse(input) {

    let typeFlowers = input[0];
    let qty = Number(input[1]);
    let budget = Number(input[2]);

    let discount = 0;
    let price = 0

    switch (typeFlowers) {
        case "Roses": price = qty * 5;
            if (qty > 80) {
                discount = price * 0.1;
            }; break;
        case "Dahlias": price = qty * 3.8;
            if (qty > 90) {
                discount = price * 0.15;
            }; break;
        case "Tulips": price = qty * 2.8;
            if (qty > 80) {
                discount = price * 0.15;
            }; break;
        case "Narcissus": price = qty * 3;
            if (qty < 120) {
                price = price * 1.15;
            }; break;
        case "Gladiolus": price = qty * 2.5;
            if (qty < 80) {
                price = price * 1.2;
            }; break;
    }

    let finalPrice = price - discount;

    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${qty} ${typeFlowers} and ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Tulips", "88", "260"]);