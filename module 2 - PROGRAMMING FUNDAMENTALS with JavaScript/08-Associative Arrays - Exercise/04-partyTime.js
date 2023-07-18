function partyTime(input) {

    function isNumber(char) {
        return /^\d$/.test(char);
    }

    let vip = [];
    let regular = [];

    let currentGuest = input.shift();
    while (currentGuest !== "PARTY") {

        let digits = currentGuest.split("");

        if (isNumber(digits[0])) {
            vip.push(currentGuest);
        } else {
            regular.push(currentGuest);
        }

        currentGuest = input.shift();
    }

    for (let element of input) {

        let digits = element.split("");

        if (isNumber(digits[0])) {
            if (vip.includes(element)) {
                let indexToDelete = vip.indexOf(element, 0);
                vip.splice(indexToDelete, 1);
            }
        } else {
            if (regular.includes(element)) {
                let indexToDelete = regular.indexOf(element, 0);
                regular.splice(indexToDelete, 1);
            }

        }

    }

    console.log(vip.length + regular.length)
    vip.forEach(guest => console.log(guest));
    regular.forEach(guest => console.log(guest));
}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);