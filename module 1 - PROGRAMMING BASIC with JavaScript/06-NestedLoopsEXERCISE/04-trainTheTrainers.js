function trainTheTrainers(input) {

    let index = 0;
    let juryCount = Number(input[index]);

    let presentationName = input[++index];
    let presentationTotalGrades = 0;
    let presentationsCount = 0;

    while (presentationName !== "Finish") {
        
        let gradeSum = 0;
        let grade = Number(input[++index]);
        

        let gradeCount = 1;
        while (gradeCount <= juryCount) {
            gradeSum += Number(grade);
            grade = (input[++index]);
            gradeCount++;
        }

        let averageGrade = gradeSum / juryCount;

        presentationTotalGrades += averageGrade;
        presentationsCount++;

        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
        presentationName = input[index];

    }
    console.log(`Student's final assessment is ${(presentationTotalGrades / presentationsCount).toFixed(2)}.`)
}





trainTheTrainers(["2",

    "While-Loop",

    "6.00",

    "5.50",

    "For-Loop",

    "5.84",

    "5.66",

    "Finish"])