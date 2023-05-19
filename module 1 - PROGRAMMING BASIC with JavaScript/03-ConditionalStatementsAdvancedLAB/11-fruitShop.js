function fruitShop (input) {

    let fruit = input[0];
    let day = input[1];
    let qty = Number(input[2]);

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch (fruit) {
            case "banana": console.log((2.5 * qty).toFixed(2)); break;
            case "apple": console.log((1.2 * qty).toFixed(2)); break;
            case "orange": console.log((0.85 * qty).toFixed(2)); break;
            case "grapefruit": console.log((1.45 * qty).toFixed(2)); break;
            case "kiwi": console.log((2.7 * qty).toFixed(2)); break;
            case "pineapple": console.log((5.5 *qty).toFixed(2)); break;
            case "grapes": console.log((3.85 * qty).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (day == "Saturday" || day == "Sunday") {
        switch (fruit) {
            case "banana": console.log((2.7 * qty).toFixed(2)); break;
            case "apple": console.log((1.25 * qty).toFixed(2)); break;
            case "orange": console.log((0.9 * qty).toFixed(2)); break;
            case "grapefruit": console.log((1.6 * qty).toFixed(2)); break;
            case "kiwi": console.log((3 * qty).toFixed(2)); break;
            case "pineapple": console.log((5.6 *qty).toFixed(2)); break;
            case "grapes": console.log((4.2 * qty).toFixed(2)); break;
            default: console.log("error"); break;
    }
    } else {
        console.log ("error");
    }
}

fruitShop (["tomato", "Monday", "0.5"]);