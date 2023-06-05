function maxNumber(array) {

    let result = "";

    for(let i = 0; i < array.length; i++) {

        let isTop = true;
        let currNum = array[i];

        for(let x = i + 1; x < array.length; x++) {

            let nextNum = array[x];

            if (nextNum >= currNum) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            result += `${currNum} `;
        }
    }

    console.log(result);
}

maxNumber([41, 41, 34, 20]);