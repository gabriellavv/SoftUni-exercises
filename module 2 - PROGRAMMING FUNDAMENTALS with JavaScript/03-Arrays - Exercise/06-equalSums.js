function equalSums(arr) {

    let indexNotFound = true; 

    for (let i = 0; i < arr.length; i++) {

        let leftSum = 0;
        let rightSum = 0;


        let index = 0;
        while (index < i) {
            leftSum += arr[index++];
        }

        index = arr.length - 1;
        while (index > i) {
            rightSum += arr[index--];
        }

        if (leftSum === rightSum) {
            console.log(i);
            indexNotFound = false;
            break;
        }
    }

    if(indexNotFound) {
        console.log("no");
    }
}

equalSums([1]);