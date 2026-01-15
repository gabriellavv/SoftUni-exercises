function negativePositiveNumbers(array) {

    let newArray = [];

    for(let element of array) {
        if(element < 0) {
            newArray.unshift(element);
        } else {
            newArray.push(element);
        }
    }

    newArray.forEach(element => {
        console.log(element)
    });

}

negativePositiveNumbers([7, -2, 8, 9]);