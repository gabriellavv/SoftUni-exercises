function toyShop (input) {

    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let teddyPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let tripPrice = Number(input[0]);
    let orderPuzzle = Number(input[1]);
    let orderDoll = Number(input[2]);
    let orderTeddy = Number(input[3]);
    let orderMinions = Number(input[4]);
    let orderTruck = Number(input[5]);

    let totalToyCount = orderPuzzle + orderDoll + orderTeddy + orderMinions + orderTruck;
    let toyPrice = (orderPuzzle * puzzlePrice) + (orderDoll * dollPrice) + (orderTeddy * teddyPrice) + (orderMinions * minionPrice) + (orderTruck * truckPrice);

    if (totalToyCount >= 50) {
        toyPrice = toyPrice * 0.75;
    } 

    let rent = toyPrice * 0.1; 

    let moneyLeft = toyPrice - rent;
    let moneyLeftAfterTrip = 0;
    let neededMoney = 0;

    if (moneyLeft > tripPrice) {
        moneyLeftAfterTrip = moneyLeft - tripPrice;
    } else {
        neededMoney = tripPrice - moneyLeft;
    }

    if (moneyLeft >= tripPrice) {
        console.log (`Yes! ${moneyLeftAfterTrip.toFixed(2)} lv left.`)
    } else {
        console.log (`Not enough money! ${neededMoney.toFixed(2)} lv needed.`)
    }
}

toyShop (["320", "8", "2", "5", "5", "1"]);