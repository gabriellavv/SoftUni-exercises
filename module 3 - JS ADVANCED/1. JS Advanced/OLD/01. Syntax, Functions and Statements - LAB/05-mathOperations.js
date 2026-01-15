function mathOperations(a, b, operator) {

    let result = 0;

    switch(operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
        case "%": result = a % b; break;
        case "**": result = a ** b; break;
    }

    console.log(result);

    // Решение 2:  не е препоръчително, тъй като е възможен ХАК!
    // console.log(eval(`${a}${operator}${b}`));
}

mathOperations(5, 6, '+');   // 11
mathOperations(3, 5.5, '*'); // 16.5