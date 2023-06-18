function searchForANumber(numArray, commands) {

    let array = numArray;
    let elToTake = commands[0];
    let elToDelete = commands[1];
    let numToSearch = commands[2];

    let sliced = array.slice(0, elToTake);

    sliced.splice(0, elToDelete);

    let numberCounter = sliced.filter(el => el === numToSearch).length;

    console.log(`Number ${numToSearch} occurs ${numberCounter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6, 3],
    [5, 2, 3]);