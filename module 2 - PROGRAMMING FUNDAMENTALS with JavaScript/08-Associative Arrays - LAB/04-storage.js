function storage(input) {

    let storage = new Map();

    for (let line of input) { 
        
        let [item, quantity] = line.split(" ");

        if (storage.has(item)) {
            storage.set(item, storage.get(item) + Number(quantity));
        } else {
            storage.set(item, Number(quantity));
        }
    }

    for (let [key, value] of storage.entries()) {
        console.log(`${key} -> ${value}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);