function christmasPreparation(input) {

    let paperRollQty = Number(input[0]);
    let fabricRollQty = Number(input[1]);
    let glueLiters = Number(input[2]);
    let discountPercents = Number(input[3]);

    let pricePaper = 5.8;
    let priceFabric = 7.2;
    let priceGlue = 1.2;

    let price = (paperRollQty * pricePaper) + (fabricRollQty * priceFabric) + (glueLiters * priceGlue);

    let percentsAfterDiscount = (100 - discountPercents) / 100;

    let finalPrice = price * percentsAfterDiscount;

    console.log(finalPrice.toFixed(3));
}

christmasPreparation(["2",
"3",
"2.5",
"25"])
