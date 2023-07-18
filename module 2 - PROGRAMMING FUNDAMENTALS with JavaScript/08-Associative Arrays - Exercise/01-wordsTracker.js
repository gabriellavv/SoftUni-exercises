function wordsTracker(array) {

    let wordsToCheck = array.shift().split(" ");

    let result = new Map();

    for(let word of wordsToCheck) {
        result.set(word, 0);
    }

    for(let element of array) {

        if(wordsToCheck.includes(element)){
            result.set(element, result.get(element) + 1);
        }
    }

    let sorted = Array.from(result.entries()).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

wordsTracker(['this sentence',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to',
    'count',
    'the',
    'occurrences',
    'of',
    'the',
    'words',
    'this',
    'and',
    'sentence',
    'because',
    'this',
    'is',
    'your',
    'task'
]);