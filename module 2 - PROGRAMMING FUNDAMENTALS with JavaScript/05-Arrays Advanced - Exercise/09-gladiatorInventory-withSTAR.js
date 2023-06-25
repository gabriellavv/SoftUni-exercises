function gladiatorInventory(input) {

    let invertory = input[0].split(" ");

    for (let i = 1; i < input.length; i++) {

        let commands = input[i].split(" ");
        let action = commands[0];
        let equipment = commands[1];

        switch (action) {

            case "Buy":
                if (!invertory.includes(equipment)) {
                    invertory.push(equipment);
                };
                break;

            case "Trash":
                if (invertory.includes(equipment)) {
                    let indexToDelete = invertory.indexOf(equipment);
                    invertory.splice(indexToDelete, 1);
                };
                break;

            case "Repair":
                if (invertory.includes(equipment)) {
                    let indexToDelete = invertory.indexOf(equipment);
                    invertory.splice(indexToDelete, 1);
                    invertory.push(equipment);
                };
                break;

            case "Upgrade":
                equipment = equipment.split("-");
                let equipmentType = equipment[0];
                let upgrade = equipment[1];
                if (invertory.includes(equipmentType)) {
                    let index = invertory.indexOf(equipmentType);
                    invertory.splice(index + 1, 0, (`${equipmentType}:${upgrade}`));
                };
                break;

        }

    }

    console.log(invertory.join(" "));
}

gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]);