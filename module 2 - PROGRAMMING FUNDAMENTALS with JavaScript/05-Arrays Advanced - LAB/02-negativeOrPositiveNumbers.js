function negativeOrPositiveNumbers(array) {


    let result = [];

    for (let i = 0; i < array.length; i++) {

        let curNum = Number(array[i]);

        if (curNum < 0) {
            result.unshift(curNum);
        } else {
            result.push(curNum);
        }
    }

    //for (let element of result) {
    //    console.log(element);
    //}

    console.log(result.join("\n"));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);