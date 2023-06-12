function orders(product, quantity) {

    let coffeePrice = (a, b) => a * b;
    let waterPrice = (a, b) => a * b;
    let cokePrice = (a, b) => a * b;
    let snacksPrice = (a, b) => a * b;

    let result = 0; 

    switch (product) {
        case "coffee": result = coffeePrice(1.5, quantity); break;
        case "water": result = waterPrice(1, quantity); break;
        case "coke": result = cokePrice(1.4, quantity); break;
        case "snacks": result = snacksPrice(2, quantity); break;
    }

    return result.toFixed(2);
}

console.log(orders("water", 5));