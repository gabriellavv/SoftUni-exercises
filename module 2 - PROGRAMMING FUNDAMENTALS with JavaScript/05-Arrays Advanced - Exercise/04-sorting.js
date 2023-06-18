function sorting(input) {

    let minToMax = input.sort((a, b) => a - b);
    let output = [];

    for(let i = 0; i <= minToMax.length + 2; i++) {
        output.push(minToMax.pop());
        output.push(minToMax.shift());
    }

    console.log(output.join(" "));
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);