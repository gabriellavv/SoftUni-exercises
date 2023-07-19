function equalNeighbors(matrix) {

    let input = matrix.slice(0);
    let counter = 0;

    while (input.length > 0) {
        let currArray = input.shift();
        let nextArray = input[0];


        for (let i = 0; i < currArray.length; i++) {
            let currElement = currArray[i];
            let nextElement = currArray[i + 1];

            if (nextElement) {
                if (currElement === nextElement) {
                    counter++;
                }
            }

            if (nextArray) {
                if (currElement === nextArray[i]) {
                    counter++;
                }
            }
        }
    }

    return counter;

}
console.log(equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]));