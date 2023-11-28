function solution(number) {
    let currNumber = number;

    return function(num) {
        return currNumber + num;
    }
}


let add5 = solution(5);    // това е функция, която приема в себе си функцията solution с аргумент 5   ==> add5 = function(num) {return 5 + num}
console.log(add5(2));  // 7 (5 + 2) 
console.log(add5(3));  // 8 (5 + 3)
