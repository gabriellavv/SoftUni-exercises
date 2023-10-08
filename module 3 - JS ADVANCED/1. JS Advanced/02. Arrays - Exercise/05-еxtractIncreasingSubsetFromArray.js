function extractIncreasingSubsetFromArray(arr) {

    // let biggestNumber = Number.MIN_SAFE_INTEGER;
    // let result = [];

    // arr.forEach(element => {
    //     if(biggestNumber <= element) {
    //         biggestNumber = element;
    //         result.push(biggestNumber);
    //     }
    // });

    // return result;


    // Решение 2: 
    // let biggestNumber = Number.MIN_SAFE_INTEGER;
    // return arr.filter((x) => {
    //     if (x >= biggestNumber) {
    //         biggestNumber = x
    //         return true;
    //     } else {
    //         return false;
    //     }
    // })

    // Решение 3:
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    
    return arr.reduce((acc, el) => {
        if (el >= biggestNumber) {
            biggestNumber = el;
            acc.push(el);
        }
        return acc;
    }, []);
}

console.log(extractIncreasingSubsetFromArray(
    [1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24]

));