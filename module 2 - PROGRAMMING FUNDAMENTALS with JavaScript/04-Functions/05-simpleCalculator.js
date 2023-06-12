function simpleCalculator(numOne, numTwo, operator) {


 //   let multiply = (a, b) => a * b ;
   // let divide = (a, b) => a / b;
 //   let add = (a, b) => a + b;
  //  let subtract = (a, b) => a - b;

  //  switch (operator) {
  //      case "multiply": return multiply(numOne, numTwo); 
  //      case "divide": return divide(numOne, numTwo); 
  //      case "add": return add(numOne, numTwo); 
   //     case "subtract": return subtract(numOne, numTwo); 
   // }

   let obj = {
    "multiply" : (a, b) => a * b,
    "divide" : (a, b) => a / b,
    "add" : (a, b) => a + b,
    "subtract" : (a, b) => a - b
   }

   return obj[operator](numOne, numTwo);
}

console.log(simpleCalculator(
    40,
    8,
    'divide'));