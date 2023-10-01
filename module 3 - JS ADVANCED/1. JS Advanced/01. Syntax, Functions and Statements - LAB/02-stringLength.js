function stringLength(str1, str2, str3) {

    let lengthSum = str1.length + str2.length + str3.length;
    let averageLength = Math.floor(lengthSum / 3);

    console.log(lengthSum);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');