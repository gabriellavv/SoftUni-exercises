function diagonalSums(matrix) {

    let firstDiagonal = 0;
    let secondaryDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;

    matrix.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondaryDiagonal += array[secondIndex--];
    });

    console.log(`${firstDiagonal} ${secondaryDiagonal}`);
}

diagonalSums([
    [20, 40],
    [10, 60]
]
);