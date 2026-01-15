function greatestCommonDivisorGCD(a, b) {
    if (a == 0)
        return b;
    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    return a;
}
console.log(greatestCommonDivisorGCD(2154, 458));  // 2
console.log(greatestCommonDivisorGCD(15, 5));      // 5
