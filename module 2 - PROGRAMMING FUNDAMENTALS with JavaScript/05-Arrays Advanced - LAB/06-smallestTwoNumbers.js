function smallestTwoNumbers(array) {

    let sortedInAscending = array.sort((a,b) => a - b);

    console.log(sortedInAscending.slice(0, 2).join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);