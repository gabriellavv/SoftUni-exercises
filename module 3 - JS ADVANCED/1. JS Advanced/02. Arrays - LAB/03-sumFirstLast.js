function sumFirstLast(array) {

    let firstNum = array.shift();
    let lastNum = array.pop();
    let sum = Number(firstNum) + Number(lastNum);

    console.log(sum);
}

sumFirstLast(['20', '30', '40']);