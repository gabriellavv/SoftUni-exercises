function excursionSale(input) {

    let index = 0;
    let seaCount = Number(input[index]);
    let mountainCount = Number(input[++index]);

    let profit = 0;

    let type = input[++index];
    while (type !== "Stop") {

        if (type === "sea") {
            if (seaCount > 0) {
                profit += 680;
                seaCount--;
            }
        } else {
            if (mountainCount > 0) {
                profit += 499;
                mountainCount--;
            }
        }
        if (seaCount === 0 && mountainCount === 0) {
            break;
        }

        type = input[++index];
    }

    if (seaCount === 0 && mountainCount === 0) {
        console.log(`Good job! Everything is sold.`);
    }

    console.log(`Profit: ${profit} leva.`);

}

excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"])
