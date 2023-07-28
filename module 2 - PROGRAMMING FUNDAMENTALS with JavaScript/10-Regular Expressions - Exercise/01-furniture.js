function furniture(input) {

    let regex = /[>]{2}(?<furniture>[A-Z][a-zA-z]+)[<]+(?<price>[\d.]+)[!](?<quantity>[\d]+)/;

    console.log("Bought furniture:");

    let moneySpent = 0;

    for(let element of input) {
        let result = element.match(regex);
        
        if(result) {
            let name = result.groups.furniture;
            let price = result.groups.price;
            let quantity = result.groups.quantity;

            console.log(name)
            moneySpent += Number(price) * Number(quantity);
        }
    }

    console.log(`Total money spend: ${moneySpent.toFixed(2)}`);

}

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])