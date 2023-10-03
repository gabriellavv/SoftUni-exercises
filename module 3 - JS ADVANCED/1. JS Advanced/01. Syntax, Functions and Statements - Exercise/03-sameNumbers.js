function sameNumbers(num) {                 
// да проверим дали всички цифри в числото са еднакви и да отпечатаме сбора им:


    let areSameNumber = true; 
    let numToString = String(num);                               // обръщаме числото в стринг
    let element = numToString[0];                                // взимаме си първия елемент за сравнение
    for (let i = 1; i < numToString.length; i++) {               // проверяваме елемент по елемент
        let currentElement = numToString[i];
        if (currentElement != element) {                         // ако намерим различен елемент даваме false и приключваме цикъла
            areSameNumber = false;
            break;
        }
    }
    console.log(areSameNumber);



    let sum = 0;
    let stringToArray = numToString.split("").map(Number);       // превръщаме стринга в масив от числа
    stringToArray.forEach(el => sum += el);                      // взимаме всеки елемент и сумираме

    console.log(sum);

}

sameNumbers(2222222);