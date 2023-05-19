function skiTrip(input) {

    let days = Number(input[0]);
    let type = input[1];
    let rating = input[2];

    let price = 0;
    let discount = 0;

    switch (type) {
        case "room for one person": price = (days - 1) * 18; break;
        case "apartment": price = (days - 1) * 25;
            if (days < 10) {
                price *= 0.7;
            } else if (10 <= days && days <= 15) {
                price *= 0.65;
            } else {
                price *= 0.5;
            } break;
        case "president apartment": price = (days - 1) * 35;
            if (days < 10) {
                price *= 0.9;
            } else if (10 <= days && days <= 15) {
                price *= 0.85;
            } else {
                price *= 0.8;
            } break;
    }

    switch (rating) {
        case "positive": price *= 1.25; break;

        case "negative": price *= 0.9; break;
    }

    console.log(price.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);