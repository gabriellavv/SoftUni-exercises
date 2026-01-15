function aggregateElements(elements) {

    //calculates the sum of all elements from the input array:
    let sum = 0;
    elements.forEach(num => sum += num);
    console.log(sum);

    //calculates the sum of the inverse values (1/ai) of all elements from the array:
    let inversedSum = 0;
    elements.forEach(num => inversedSum += 1 / num);
    console.log(inversedSum);

    //concatenates the string representations of all elements from the array:
    let string = "";
    elements.forEach(num => string += num);
    console.log(string);



    //Решение 2:
    // function aggregateElements(elements) {

    //     aggregate(elements, 0, (a, b) => a + b);             // извикваме със sum функция
    //     aggregate(elements, 0, (a, b) => a + 1 / b);         // извикваме със inversedSum функцията
    //     aggregate(elements, '', (a, b) => a + b);            // извикваме със функцията за конкатениране

    //     function aggregate(arr, initialValue, func) {
    //         let value = initialValue;                        // value = 0/""
    //         for (let i = 0; i < arr.length; i++) {            // оперираме според функцията с всеки елемент от масива;
    //             value = func(value, arr[i]);
    //         }
    //         console.log(value);
    //     }
    // }

}
aggregateElements([1, 2, 3]);