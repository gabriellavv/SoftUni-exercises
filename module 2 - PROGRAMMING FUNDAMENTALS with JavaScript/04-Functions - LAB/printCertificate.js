function printCertificate(grade, nameArr) {

    if (pass(grade)) {
        printHeader();
        console.log(printName(nameArr[0], nameArr[1]));
        formatGrade(grade);
    } else {
        let msg = `${nameArr[0]} ${nameArr[1]} does not qualify`;
        console.log(msg);
    }

    //////////////////////////////////////////////////////////////////////////////

    function pass(grade) {
        return (grade >= 3);
    }



    function printHeader() {
        console.log("~~~- {@} -~~~");
        console.log("~- Certificate -~");
        console.log("~~~- ~---~ -~~~");
    }


    function printName(firstName, lastName) {
        return firstName + " " + lastName;

    }


    function formatGrade(grade) {

        if (grade < 3) {
            console.log("Fail (2)");
        } else if (grade < 3.5) {
            console.log(`Poor (${grade.toFixed(2)})`);
        } else if (grade < 4.5) {
            console.log(`Good (${grade.toFixed(2)})`);
        } else if (grade < 5.5) {
            console.log(`Very good (${grade.toFixed(2)})`);
        } else if (grade >= 5.5) {
            console.log(`Excellent (${grade.toFixed(2)})`);
        }
    }
}

printCertificate(2, ['Peter', 'Carter']);