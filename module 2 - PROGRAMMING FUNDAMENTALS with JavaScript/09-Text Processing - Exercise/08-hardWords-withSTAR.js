function hardWords(input) {

    // РЕШЕНИЕ 1:

    // let textToArray = input[0].split(" ");
    // let array = input[1];                     // думи, които трябва да попълним в текста


    // // проверяваме за всяка дума за попълване по нужното пространство:
    // for (let word of array) {

    //     let matchingSpace = "_".repeat(word.length);

    //     // интерираме по текста и взимаме всяка дума от него
    //     for (let i = 0; i < textToArray.length; i++) {

    //         let currentWord = textToArray[i];
    //         let symbol = ""

    //         // ако думата има залепен за нея препинателен знак, го отделяме от думата:
    //         if (currentWord.endsWith(".") || currentWord.endsWith(",")) {

    //             let wordToArr = currentWord.split("");
    //             symbol = wordToArr.pop();
    //             wordToArr = wordToArr.join("");
    //             currentWord = wordToArr;
    //         }

    //         // ако получаваме празното пространство, което ни е нужно, заменяме в текста с търсената дума и добавяме преп. знак:
    //         if (matchingSpace === currentWord) {
    //             textToArray[i] = `${word}${symbol}`;
    //         }
    //     }
    // }

    // console.log(textToArray.join(" "));




    // РЕШЕНИЕ 2:
    let text = input[0];
    let words = input[1];

    words = words.sort((w1, w2) => w2.length - w1.length);   // сортираме думите от най-дълга към най-къса

    for (let word of words) {
        
        let template = "_".repeat(word.length);

        while(text.includes(template)) {
            text = text.replace(template, word);
        }
    }

    console.log(text);
}

hardWords([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);