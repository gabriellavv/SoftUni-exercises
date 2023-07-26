function cutAndReverse(string) {

    let firstHalf = string.slice(0, string.length / 2);
    let secondHalf = string.slice(string.length / 2);

    console.log(firstHalf.split("").reverse().join(""));
    console.log(secondHalf.split("").reverse().join(""));

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');