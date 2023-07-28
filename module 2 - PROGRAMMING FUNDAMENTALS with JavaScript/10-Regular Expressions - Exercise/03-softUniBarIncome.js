function softUniBarIncome(input) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>+)>[^|$%.]*\|(?<count>\d+)\|[^\d|$%.]*(?<price>\d+.+[0-9]?)\$/;

    let totalIncome = 0;

    let currentLine = input.shift();
    while(currentLine !== 'end of shift'){

        let order = currentLine.match(pattern);

        if(order) {
            let customerName = order.groups.customer;
            let product = order.groups.product;
            let count = Number(order.groups.count)
            let price = Number(order.groups.price);
            let totalPrice = count * price;

            console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`);

            totalIncome += totalPrice;
        }
        currentLine = input.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);