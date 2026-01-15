class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        // If a product with the same name and size already exists in the productStock, 
        // add the quantity to the product and return the following message:
        //  `You added ${quantity} more pieces of product ${productName} size ${size}`
        const existingProduct = this.productStock.find(
            (product) => product.productName === productName && product.size === size
        );

        if (existingProduct) {
            existingProduct.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`

            // Otherwise, add the product with properties: {productName, size, quantity, price} to the productStock and return the following message: 
        } else {
            const newProduct = { productName, size, quantity, price };
            this.productStock.push(newProduct);
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    }

    sendProduct(productName, size) {
        // This method allows the sending of a product from the store's inventory. The method accepts two arguments

        // If the product with the given name and size is not present in the productStock, throw an error with the following message:
        const index = this.productStock.findIndex(
            (product) => product.productName === productName && product.size === size
        );

        if (index === -1) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`)

            // Otherwise, remove the product from the productStock and return the following message:
        } else {
            this.productStock.splice(index, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }


    }

    findProductsBySize(size) {
        // The method accepts one arguments:
        // o	size (string);

        // Iterate through the productStock array and find all products that match the specified size 
        const matchingProducts = this.productStock.filter((product) => product.size === size);
        // and return a list of the products that match the given size in the format:
        // `${product1}-${quantity} pieces, ${product2}-${quantity} pieces,…`
        if (matchingProducts.length > 0) {
            const productInfo = matchingProducts
                .map((product) => `${product.productName}-${product.quantity} pieces`)
                .join(", ");
            return productInfo;

            // If no products matching the specified size are found in the productStock, return:
        } else {
            return `There are no products available in that size`
        }
    }

    listProducts() {
        // •	If there are no products in stock, return:
        // `${storehouse} storehouse is empty`
        if (this.productStock.length === 0) {
            return `${this.storehouse} storehouse is empty`;
        }
        // •	Otherwise, on the first line return:
        // `${storehouse} storehouse in ${location} available products:`

        // On the next lines, display information about each product, sorted in alphabetical order by their productName in the following format:
        // `${productName}/Size:${size}/Quantity:${quantity}/Price:${price}$`
        this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));

        const productInfo = this.productStock.map(
            (product) =>
                `${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`);

        return `${this.storehouse} storehouse in ${this.location} available products:\n${productInfo.join("\n")}`;
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());
