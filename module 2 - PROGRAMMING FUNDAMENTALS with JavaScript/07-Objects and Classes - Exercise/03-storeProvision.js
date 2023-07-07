function storeProvision(stock, order) {

    let stockObj = {};

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let productQtty = Number(stock[i + 1]);
        stockObj[product] = productQtty;
    }

    for (let x = 0; x < order.length; x += 2) {
        let product = order[x];
        let productQtty = Number(order[x + 1]);

        if (!stockObj.hasOwnProperty(product)) {
            stockObj[product] = 0;
        }

        stockObj[product] += Number(productQtty);
    }

    for (let key in stockObj) {
        console.log(`${key} -> ${stockObj[key]}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);