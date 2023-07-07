
class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(object) {
        this.storage.push(object);
        this.capacity -= object.quantity;
        this.totalCost += object.quantity * object.price;
    }

    getProducts() {
        let result = [];
        for (let element of this.storage) {
            result.push(JSON.stringify(element));
        }
        return result.join("\n");
    }
}


let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);