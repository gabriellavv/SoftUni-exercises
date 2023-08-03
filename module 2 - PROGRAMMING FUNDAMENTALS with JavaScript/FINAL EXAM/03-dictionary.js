function dictionary(input) {

    let dictionaryMap = new Map();

    let words = input.shift().split(" | ");

    for (let element of words) {
        let [word, definition] = element.split(": ");

        if (!dictionaryMap.has(word)) {     // ако в обекта нямаме такъв таргет, го създаваме
            dictionaryMap.set(word, "");
        }

        dictionaryMap.set(word, dictionaryMap.get(word) + " def " + definition ); ////////////////////////
    }

    

    let testWords = input.shift().split(" | ");

    let command = input.shift();

    if (command === "Test") {

        for(let element of testWords) {

            if(dictionaryMap.has(element)) {
                console.log(`${element}: `);

                let allDefinitons = dictionaryMap.get(element).split(" def ");
                for(let el of allDefinitons) {
                    if(el !== "") {
                        console.log(` -${el}`);
                    }
                }
            }
        }
    }

    if (command === "Hand Over") {

        let result = "";

        for (let key of dictionaryMap.keys()) {
            result += `${key} `;
        }

        console.log(result);
    }
}

dictionary((["programmer: an animal, which turns coffee into code | developer: a magician | programmer: testestest",

"programmer | domino",

"Hand Over"]));