function magicMatrices(matrix) {

    let rowSum = 0;
    let colSum = 0;
    let isMagic = true;

    if (rowSum === 0) {
        for (let col = 0; col < matrix[0].length; col++) {
            let currentNum = matrix[0][col];
            rowSum += currentNum;
        }
    }

    if (colSum === 0) {
        for (let row = 0; row < matrix.length; row++) {
            let currentNum = matrix[row][0];
            colSum += currentNum;
        }
    }

    if (rowSum !== colSum) {
        isMagic = false;
        return console.log(isMagic);
    }



    if (rowSum !== 0) {

        for (let row = 0; row < matrix.length; row++) {

            let currentRow = 0;

            for (let col = 0; col < matrix[row].length; col++) {
                let currentNum = matrix[row][col];
                currentRow += currentNum;
            }

            if (currentRow !== rowSum) {
                isMagic = false;
                return console.log(isMagic);
            }
        }
    }


    if (colSum !== 0) {

        for (let col = 0; col < matrix[0].length; col++) {

            let currentCol = 0;

            for (let row = 0; row < matrix.length; row++) {
                let currentNum = matrix[row][col];
                currentCol += currentNum;
            }

            if (currentCol !== colSum) {
                isMagic = false;
                return console.log(isMagic);
            }
        }
    }

    console.log(isMagic);


}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]
);