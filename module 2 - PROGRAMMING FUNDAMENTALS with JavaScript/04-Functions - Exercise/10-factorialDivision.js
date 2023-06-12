function factorialDivision(a, b) {

    // Вариант 1: 

    function firstFactorial(numA) {

        let currNum = numA;
        for (let i = numA - 1; i >= 1; i--) {
            currNum *= i;
        }

        return currNum;
    }

    function secondFactorial(numB) {

        let currNum = numB;
        for (let i = numB - 1; i >= 1; i--) {
            currNum *= i;
        }

        return currNum;
    }

    console.log((firstFactorial(a) / secondFactorial(b)).toFixed(2));


    // Вариант 2 с рекурсия: 

    // function factorial(number) {
    //     if (number === 0) {
    //         return 1;
    //     } else {
    //         return number * factorial(number - 1);
    //     }
    // }
    // 
    // let firstNumFactorial = factorial(a);
    // let secondNumFactorial = factorial(b);
    // console.log((firstNumFactorial / secondNumFactorial).toFixed(2));
}

factorialDivision(6,
    2);