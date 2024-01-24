function juiceFlavors(array) {

    let juicesMap = new Map;
    let bottlesMap = new Map;

    //  You will be given different juices, as strings. You will also receive quantity as a number. 
    array.forEach(element => {
        const [flavor, quantity] = element.split(" => ");


        // If you receive a juice that you already have, you must sum the current quantity of that juice, with the given one.
        if (!juicesMap.has(flavor)) {
            juicesMap.set(flavor, 0);
        }

        juicesMap.set(flavor, juicesMap.get(flavor) + Number(quantity));


        // When a juice reaches 1000 quantity, it produces a bottle.
        if (juicesMap.get(flavor) >= 1000) {
            let newBottles = Math.floor(juicesMap.get(flavor) / 1000);
            let quantityLeft = juicesMap.get(flavor) % 1000;


            // You must store all produced bottles and you must print them at the end.
            if (!bottlesMap.has(flavor)) {
                bottlesMap.set(flavor, 0);
            }

            bottlesMap.set(flavor, bottlesMap.get(flavor) + newBottles);


            // Note: 1000 quantity of juice is one bottle. 
            // If you happen to have more than 1000, you must make as many bottles as you can, and store what is left from the juice.
            juicesMap.set(flavor, quantityLeft);
        }
    });

    // The output is the produced bottles. The bottles are to be printed in the order of obtaining the bottles. 
    bottlesMap.forEach((value, key) => console.log(`${key} => ${value}`));

}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)