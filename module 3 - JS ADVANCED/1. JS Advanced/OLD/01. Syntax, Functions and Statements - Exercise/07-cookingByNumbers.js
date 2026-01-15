function cookingByNumbers(num, op1, op2, op3, op4, op5) {

    let result = Number(num);
    let array = [];
    array.push(op1, op2, op3, op4, op5);

    for (let i = 0; i < 5; i++) {
        let currentOperation = array[i];

        // switch (currentOperation) {
        //     case "chop": result /= 2; break;
        //     case "dice": result = Math.sqrt(result); break;
        //     case "spice": result++; break;
        //     case "bake": result *= 3; break;
        //     case "fillet": result -= result * 0.2; break;
        // }

        let switchReplacement = {
            chop() {result /= 2},
            dice() {result = Math.sqrt(result)},
            spice() {result++},
            bake() {result *= 3},
            fillet() {result -= result * 0.2},
        }
        switchReplacement[currentOperation]();


        console.log(result);
    }

}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');  // 16 8 4 2 1
console.log('--------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');  // 3 4 2 6 4.8