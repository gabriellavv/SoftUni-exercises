function wordOccurrences(input) {

    let result = new Map();

    for(let element of input) {
       
        if(!result.has(element)) {
            result.set(element, 0);
        }

        result.set(element, result.get(element) + 1);
    }

    let sorted = Array.from(result.entries()).sort((a, b) => b[1] - a[1]);

    for(let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}

wordOccurrences([
    "Here",
    "is",
    "the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "sentence",
    "And",
    "finally",
    "the",
    "third",
    "sentence"]);