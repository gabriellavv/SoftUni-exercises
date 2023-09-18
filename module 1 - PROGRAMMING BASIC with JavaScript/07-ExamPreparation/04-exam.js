function exam(input) {

    let studentsCount = Number(input[0]);
    let sumOfGrades = 0;

    let lessThan3 = 0;
    let lessThan4 = 0;
    let lessThan5 = 0;
    let topStudents = 0;

    for(let i = 1; i <= studentsCount; i++) {

        let currentGrade = Number(input[i]);
        sumOfGrades += currentGrade;

        if(currentGrade >= 2 && currentGrade <= 2.99) {
            lessThan3++;
        } else if (currentGrade >= 3 && currentGrade <= 3.99) {
            lessThan4++;
        } else if (currentGrade >= 4 && currentGrade <= 4.99){
            lessThan5++;
        } else if (currentGrade >= 5) {
            topStudents++;
        }
    }

    let averageGrades = sumOfGrades / studentsCount;

    console.log(`Top students: ${((100 / studentsCount) * topStudents).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((100 / studentsCount) * lessThan5).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((100 / studentsCount) * lessThan4).toFixed(2)}%`);
    console.log(`Fail: ${((100 / studentsCount) * lessThan3).toFixed(2)}%`);
    console.log(`Average: ${averageGrades.toFixed(2)}`);


}

exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);