function equalArrays(array1, array2) {

    let sum = 0;
    let indexOfDifference = 0;

    for (let i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i]);
        sum += array1[i];
    }

    for (let i = 0; i < array2.length; i++) {
        array2[i] = Number(array2[i]);
    }

    let areEqual = true;
    for(let i = 0; i < array1.length; i++) {
        if(array1[i] !== array2[i]) {
            areEqual = false;
            indexOfDifference = i
            break;
        }
    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexOfDifference} index`);
    }
}

equalArrays(['1','2','3','4','5'],
['1','2','4','4','5']
);