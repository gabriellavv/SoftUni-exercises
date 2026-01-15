function sortAnArrayBy2Criteria(array) {

    // function sortAnArrayByTwoCriteria(input) {

    //     let sorted = input.sort((a, b) => {
    //         if (a.length !== b.length) {
    //             return a.length - b.length
    //         }
    //         return a.localeCompare(b);
    //     });

    //     console.log(sorted.join("\n"));
    // }

    // sortAnArrayByTwoCriteria(array);


    array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(array.join("\n"));
}

sortAnArrayBy2Criteria(
    ['alpha',
        'beta',
        'gamma']
);