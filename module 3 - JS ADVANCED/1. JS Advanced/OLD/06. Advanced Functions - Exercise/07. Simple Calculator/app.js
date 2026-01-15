function calculator() {
    // Create a function calculator which returns an object that can modify the DOM. 
    // The returned object should support the following functionality: 

    let numA;
    let numB;
    let result;


    // init (selector1, selector2, resultSelector) - initializes the object to work with the elements corresponding to the supplied selectors. 
    function init(selectorA, selectorB, selectorsResult) {
        numA = document.querySelector(selectorA);
        numB = document.querySelector(selectorB);
        result = document.querySelector(selectorsResult);
    };


    // add () - adds the numerical value of the element corresponding to selector1 to the numerical value of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector
    function add() {
        result.value = Number(numA.value) + Number(numB.value);
    };

    
    // subtract () - subtracts the numerical value of the element corresponding to selector2 from the numerical value of the element corresponding to selector1 and then writes the result in the element corresponding to resultSelector.
    function subtract() {
        result.value = Number(numA.value) - Number(numB.value);
    };


    return {
        init,
        add,
        subtract,
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');



