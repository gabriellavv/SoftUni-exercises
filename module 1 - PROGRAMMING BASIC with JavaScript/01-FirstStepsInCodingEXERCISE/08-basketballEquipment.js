function basketballEquipment (input) {

    let tax = Number(input[0]);
    let shoes = tax * 0.6;
    let set = shoes * 0.8;
    let ball = set * 0.25;
    let accessories = ball * 0.2;

    let expenses = tax + shoes + set + ball + accessories;

    console.log(expenses);
}

basketballEquipment([365]);
