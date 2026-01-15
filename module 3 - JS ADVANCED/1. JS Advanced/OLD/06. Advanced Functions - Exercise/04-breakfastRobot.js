function solution() {

    let availableStocks = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    }

    return function manager(data) {
        let commands = data.split(" ");

        switch (commands[0]) {

            case "restock":
                let microelement = commands[1];
                let quantity = Number(commands[2]);

                availableStocks[microelement] += quantity;

                return "Success";


            case "prepare":
                let recipe = commands[1];
                let neededQuantity = Number(commands[2]);

                for (const [ingredient, value] of Object.entries(recipes[recipe])) {    // рецептата с нужното количество

                    if ((recipes[recipe][ingredient] * neededQuantity) > availableStocks[ingredient]) {
                        return `Error: not enough ${ingredient} in stock`;
                    } else {
                        availableStocks[ingredient] -= value * neededQuantity;
                    }
                };
                return "Success";


            case "report":
                return `protein=${availableStocks.protein} carbohydrate=${availableStocks.carbohydrate} fat=${availableStocks.fat} flavour=${availableStocks.flavour}`;
        }
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); //Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); //Success
console.log(manager("prepare apple 1")); //Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); //Success
console.log(manager("report")); //protein=0 carbohydrate=4 fat=3 flavour=55



