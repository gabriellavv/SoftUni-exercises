function pieceOfPie(array, target1, target2) {

    let start = array.indexOf(target1);
    let end = array.indexOf(target2) + 1;

    let result = array.slice(start, end);

    return result;

}

console.log(pieceOfPie(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));