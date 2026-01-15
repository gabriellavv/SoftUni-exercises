function autoEngineeringCompany(array) {

    // You are tasked to create a register for a company that produces cars. 
    // You need to store how many cars have been produced from a specific model of a specific brand.
    let registerMap = new Map;

    array.forEach(element => {

        const [brand, model, producedCars] = element.split(" | ");

        // If the carBrand you’ve received already exists, just add the new carModel to it with the produced cars as its value. 
        // If even the carModel exists, just add the given value to the current one.
        if (!registerMap.has(brand)) {
            registerMap.set(brand, {});
        };

        if (!registerMap.get(brand)[model]) {
            registerMap.get(brand)[model] = 0;
        };

        registerMap.get(brand)[model] += Number(producedCars);
    });


    // As output, you need to print - for every car brand, the car models, and a number of cars produced from that model. 
    // The order of printing is the order in which the brands and models first appear in the input. 
    // The first brand in the input should be the first printed and so on. 
    // For each brand, the first model received from that brand, should be the first printed and so on.

    for (const [key, value] of registerMap) {
        console.log(`${key}`);

        for (const key in value) {
            console.log(`###${key} -> ${value[key]}`);
        };
    };
};

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);