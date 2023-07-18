function cardGame(input) {

    let powerObj = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
        S: 4,
        H: 3,
        D: 2,
        C: 1,
    }

    let players = new Map();

    for (let line of input) {
        let [name, cards] = line.split(": ");
        let card = cards.split(", ");

        for (let current of card) {

            if (!players.has(name)) {
                players.set(name, new Set());
            }

            players.get(name).add(current);
        }
    }

    for (let [key, value] of players.entries()) {

        let currentSum = 0;

        for (let element of value) {

            let [power, type] = element.split("");

            if (element.length === 3) {
                power = 10;
                type = element[element.length - 1];
            }

            let miltiplier1 = powerObj[power];
            let multiplier2 = powerObj[type];

            currentSum += miltiplier1 * multiplier2

        }

        console.log(`${key}: ${currentSum}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);