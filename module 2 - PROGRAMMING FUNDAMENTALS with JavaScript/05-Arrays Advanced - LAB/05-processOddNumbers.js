function processOddNumbers(array) {

    let outputArray = [];

    for (let i = 1; i < array.length; i += 2) {
        outputArray.push(array[i] * 2)
    }

    console.log(outputArray.reverse().join(" "));

   // return array.filter((el, index) => index % 2 !== 0)
   //     .map(x => x * 2)
   //     .reverse()
   //     .join(" ");
}


processOddNumbers([3, 0, 10, 4, 7, 3]);