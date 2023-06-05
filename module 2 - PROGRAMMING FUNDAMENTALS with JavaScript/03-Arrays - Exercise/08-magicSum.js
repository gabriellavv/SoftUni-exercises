function magicSum(arr, num) {

    for (let i = 0; i < arr.length; i++) {

        let currNum = arr[i];

        for (let x = i + 1; x < arr.length; x++) {

            let nextNum = arr[x];

            if (currNum + nextNum === num) {
                console.log(`${currNum} ${nextNum}`);
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8],
    27);