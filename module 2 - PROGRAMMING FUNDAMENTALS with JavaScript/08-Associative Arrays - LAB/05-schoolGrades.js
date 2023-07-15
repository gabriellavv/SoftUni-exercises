function schoolGrades(input) {

    function avgGrade(array) {

        let sum = 0;
        let counter = 0
        for(let element of array) {
            sum += element;
            counter++
        }

        return sum / counter;
    }

    let result = new Map();

    for (let line of input) {

        let lineArr = line.split(" ");
        let student = lineArr.shift();
        let grades = lineArr.map(Number);


        if (!result.has(student)) {
            result.set(student, []);
        }

        for (let el of grades) {
            result.get(student).push(el);
        }
    }

    let sorted = Array.from(result.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${avgGrade(kvp[1]).toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);