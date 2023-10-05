function biggestElement(matrix) {

    let biggestEl = Number.MIN_SAFE_INTEGER;

    matrix.forEach(array => {
        array.forEach(element => {
            if (element > biggestEl) {
                biggestEl = element;
            }
        });

    });

    console.log(biggestEl);
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]
);