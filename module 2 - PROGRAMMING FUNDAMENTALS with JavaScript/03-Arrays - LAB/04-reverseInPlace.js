function reverseInPlace(input) {

    for (let i = 0; i < input.length / 2; i++) {

        let oldElement = input[i];
        let indexForSwap = input.length - 1 - i;
        input[i] = input[indexForSwap];
        input[indexForSwap] = oldElement;
    }

    console.log(input.join(" "));

    // let printline = "";

    // for(let i = input.length - 1; i >= 0; i--) {
    //     printline += input[i] + " ";
    // }

    // console.log(printline);
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);