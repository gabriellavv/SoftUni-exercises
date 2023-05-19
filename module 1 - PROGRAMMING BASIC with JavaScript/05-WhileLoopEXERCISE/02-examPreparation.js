function examPreparation(input) {

    let index = 0;

    let badGrades = Number(input[index++]);
    let taskName = "";
    let grade = 0;
    let badGradesCounter = 0;
    let gradesSum = 0;
    let totalGradesCount = 0;
    let totalTasksCount = 0;
    let lastTaskName = "";

    while (index < input.length) {
        taskName = input[index++];

        if (taskName === "Enough") {
            console.log(`Average score: ${(gradesSum / totalGradesCount).toFixed(2)}`);
            console.log(`Number of problems: ${totalTasksCount}`);
            console.log(`Last problem: ${lastTaskName}`);
            break;
        }

        grade = Number(input[index++]);
        gradesSum += grade;
        totalGradesCount++;

        if (grade <= 4) {
            badGradesCounter++;
        }

        if (badGradesCounter === badGrades) {
            console.log(`You need a break, ${badGradesCounter} poor grades.`);
            break;
        }

        lastTaskName = taskName;
        totalTasksCount++;
    } 
}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);