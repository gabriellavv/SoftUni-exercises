function reverseAnArrayOfNumbers(n, array) {

    let newArray = [];

    for(let i = n - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }

    console.log(newArray.join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50] );