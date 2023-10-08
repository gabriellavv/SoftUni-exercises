function rotateArray(array, rotationsCount) {

    for(let i = 1; i <= rotationsCount; i++) {
        array.unshift(array.pop());
    }

    console.log(array.join(" "));
}

rotateArray(
    ['1',
        '2',
        '3',
        '4'],
    2

);