function lowestPricesInCities(arr) {

    let priceList = {};

    while (arr.length) {
        let [town, product, price] = arr.shift().split(" | ");

        price = Number(price);

        if(priceList.hasOwnProperty(product)) {
            if(price >= priceList[product].price) {
                continue;
            }
        }
        
        priceList[product] = {town, price};
    }

    for(let product in priceList) {
        console.log(`${product} -> ${priceList[product].price} (${priceList[product].town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);