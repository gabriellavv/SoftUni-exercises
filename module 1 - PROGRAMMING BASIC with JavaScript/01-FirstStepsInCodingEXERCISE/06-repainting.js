function repainting(input) {

    let nylon = 1.5;
    let paint = 14.50;
    let thinner = 5;
    let pack = 0.4;

    let amountNylon = Number(input[0]) + 2;
    let litresPaint = Number(input[1]) * 1.1;
    let litresThinner = Number(input[2]);
    let workingHours = Number(input[3]);

    let materialsPrice = nylon * amountNylon + paint * litresPaint + thinner * litresThinner + pack;
    let wagesPerHour = materialsPrice * 0.3;
    let totalWages = workingHours * wagesPerHour;

    let totalPrice = materialsPrice + totalWages;

    console.log(totalPrice);
}

repainting(["10", "11", "4", "8"]);
