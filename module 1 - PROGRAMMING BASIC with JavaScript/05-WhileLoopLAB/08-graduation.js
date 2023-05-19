function graduation(input) {

    let index = 0;
    let name = input[index++];
    let yearlyGrade = Number(input[index]);
    let averageGrade = 0;

    while (index < 13) {

        averageGrade += yearlyGrade / 12;

        if (yearlyGrade >= 4) {

            yearlyGrade = Number(input[++index]);

            if (index > 12) {
                console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
            }
        } else {
            console.log(`${name} has been excluded at ${index} grade`);
            break;
        }
    }
}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);