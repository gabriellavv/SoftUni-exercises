function dungeonestDark(input) {

    let health = 100;
    let coins = 0;

    let roomsArray = input[0].split('|');

    for (let i = 0; i < roomsArray.length; i++) {

        let sepElements = roomsArray[i].split(" ");

        let item = sepElements[0];
        let itemNumber = Number(sepElements[1]);

        switch (item) {

            case "potion": health += itemNumber;
                if (health > 100) {
                    itemNumber = itemNumber - (health - 100);
                    health = 100;
                }
                console.log(`You healed for ${itemNumber} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case "chest": coins += itemNumber;
                console.log(`You found ${itemNumber} coins.`);
                break;

            default: health -= itemNumber;
                if (health > 0) {
                    console.log(`You slayed ${item}.`);
                } else {
                    console.log(`You died! Killed by ${item}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
        }

    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);