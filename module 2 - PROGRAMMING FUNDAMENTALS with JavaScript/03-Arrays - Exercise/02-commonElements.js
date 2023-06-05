function commonElements(arr1, arr2) {

    let loopLength = arr1.length;
    for(let i = 0; i < loopLength; i++) {
        
        let currentInput = arr1[i];

        if (arr2.includes(currentInput)) {
            console.log(currentInput);
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);