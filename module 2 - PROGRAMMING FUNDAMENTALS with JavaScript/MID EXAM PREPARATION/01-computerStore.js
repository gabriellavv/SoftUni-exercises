function computerStore2(input) {

    let customerType = input[input.length - 1];
    let price = 0;

    for(let index = 0; index <= (input.length - 2); index++) 

        if (Number(input[index]) > 0) {
            price += Number(input[index]);
        } else {
            console.log("Invalid price!")
        }
    

    let taxes = price * 0.2;
    let priceAfterTaxes = price + taxes;

    if(customerType === "special") {
        priceAfterTaxes *= 0.9;
    }

    if(priceAfterTaxes === 0) {
        console.log("Invalid order!")
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${priceAfterTaxes.toFixed(2)}$`);

    }
}

computerStore2([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    