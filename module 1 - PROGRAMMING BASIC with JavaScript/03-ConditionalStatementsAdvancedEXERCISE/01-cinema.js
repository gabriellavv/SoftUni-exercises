function cinema (input) {

    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let income = 0

    switch (type) {
        case "Premiere": income = (12 * r * c); break;
        case "Normal": income = (7.5 * r * c); break;
        case "Discount": income = (5 * r * c); break;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema (["Premiere", "10", "12"]);