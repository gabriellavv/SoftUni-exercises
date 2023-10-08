function magicMatrices(matrix) {

    let rowSum = 0;
    let isMagic = true;

    for (let array = 0; array < matrix.length; array++) {

        if (array === 0) {
            for (let i = 0; i < matrix[array].length; i++) {
                rowSum += Number(matrix[array][i]);
            }

        } else {
            let nextSum = 0;
            for (let i = 0; i < matrix[array].length; i++) {
                nextSum += Number(matrix[array][i]);
            }

            if (rowSum !== nextSum) {
                isMagic = false;
                console.log(isMagic);
                return;
            }
        }
    }

    let colSum = 0;

    for (let cols = 0; cols < matrix.length; cols++) {

        if (cols === 0) {
            for (let c = 0; c < matrix.length; c++) {
                colSum += matrix[c][cols];
            }
        } else {
            let nextColSum = 0;
            for (let c = 0; c < matrix.length; c++) {
                nextColSum += matrix[c][cols];
            }

            if (colSum !== nextColSum) {
                isMagic = false;
                console.log(isMagic);
                return;
            }
        }
    }

    if (rowSum === colSum) {
        console.log(isMagic);
    }
}

magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);