function fruit(type, grams, pricePerKg) {

    let kgNeeded = grams / 1000;       
    let sum = kgNeeded * pricePerKg;

console.log(`I need $${sum.toFixed(2)} to buy ${kgNeeded.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);   //I need $4.50 to buy 2.50 kilograms orange.
fruit('apple', 1563, 2.35);    //I need $3.67 to buy 1.56 kilograms apple.