function piccolo(input) {

    let carsIn = new Set();

    for (let car of input) {

        let [action, number] = car.split(", ");

        if (action === "IN") {
            carsIn.add(number);
        } else {
            carsIn.delete(number);
        }
    }

    let sorted = Array.from(carsIn).sort((a, b) => a.localeCompare(b));

    if (sorted.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(sorted.join("\n"));
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);