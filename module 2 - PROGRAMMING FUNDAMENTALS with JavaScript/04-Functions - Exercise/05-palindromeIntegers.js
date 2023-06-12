function palindromeIntegers(arr) {


    for (let i = 0; i < arr.length; i++) {

        //     let isPalndrome = true;
        let currNumAsString = String(arr[i]);

        let reversedNumber = currNumAsString.split("").reverse().join("");

        if (currNumAsString === reversedNumber) {
            console.log(true);
        } else {
            console.log(false)
        }



        //     for(let x = 0; x < currNumAsString.length / 2; x++) {

        //         let firstElement = currNumAsString[x];
        //         let lastElementIndex = currNumAsString.length - 1 - x;
        //         let lastElement = currNumAsString[lastElementIndex];

        //         if (firstElement !== lastElement) {
        //            isPalndrome = false;
        //              break;
        //         }
        //     }

        //   console.log(isPalndrome);
    }
}

palindromeIntegers([32, 2, 232, 1010]);