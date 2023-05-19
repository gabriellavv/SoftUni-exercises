function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);
    let price = 0;

    // if (city == "Sofia") {
    //     if (product == "coffee") {
    //         console.log(count*0.5);
    //     } else if (product == "water") {
    //         console.log(count*0.8);
    //     } else if (product == "beer") {
    //         console.log(count*1.2);
    //     } else if (product == "sweets") {
    //         console.log(count*1.45);
    //     } else if (product == "peanuts") {
    //         console.log(count*1.6);
    //     }
    // } else if (city == "Plovdiv") {
    //     if (product == "coffee") {
    //         console.log(count*0.4);
    //     } else if (product == "water") {
    //         console.log(count*0.7);
    //     } else if (product == "beer") {
    //         console.log(count*1.15);
    //     } else if (product == "sweets") {
    //         console.log(count*1.3);
    //     } else if (product == "peanuts") {
    //         console.log(count*1.5);
    //     }
    // } else if (city == "Varna") {
    //     if (product == "coffee") {
    //         console.log(count*0.45);
    //     } else if (product == "water") {
    //         console.log(count*0.7);
    //     } else if (product == "beer") {
    //         console.log(count*1.1);
    //     } else if (product == "sweets") {
    //         console.log(count*1.35);
    //     } else if (product == "peanuts") {
    //         console.log(count*1.55);
    //     }
    // }

    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee": price = count * 0.5; break;
                case "water": price = count * 0.8; break;
                case "beer": price = count * 1.2; break;
                case "sweets": price = count * 1.45; break;
                case "peanuts": price = count * 1.6; break;
            } break;
        case "Plovdiv":
            switch (product) {
                case "coffee": price = count * 0.4; break;
                case "water": price = count * 0.7; break;
                case "beer": price = count * 1.15; break;
                case "sweets": price = count * 1.30; break;
                case "peanuts": price = count * 1.5; break;
            } break;
        case "Varna":
            switch (product) {
                case "coffee": price = count * 0.45; break;
                case "water": price = count * 0.7; break;
                case "beer": price = count * 1.1; break;
                case "sweets": price = count * 1.35; break;
                case "peanuts": price = count * 1.55; break;
            } break;
    }

    console.log(price);
}

smallShop(["peanuts", "Plovdiv", "1"]);