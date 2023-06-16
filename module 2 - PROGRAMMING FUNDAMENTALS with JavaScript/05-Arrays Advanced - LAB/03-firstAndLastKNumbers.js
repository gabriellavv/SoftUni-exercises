function firstAndLastKNumbers(array) {

    let kNumber = array[0];
    let newArray = array.slice(1);

    console.log(newArray.slice(0,kNumber).join(" "));
    console.log(newArray.slice(newArray.length - kNumber).join(" "));

}

firstAndLastKNumbers([2, 7, 8, 9]);