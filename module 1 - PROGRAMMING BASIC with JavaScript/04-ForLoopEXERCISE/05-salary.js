function salary(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    let fine = 0;

    for (let i = 2; i < openTabs + 2; i++) {
        if (input[i] === "Facebook") {
            fine += 150;
        } else if (input[i] === "Instagram") {
            fine += 100;
        } else if (input[i] === "Reddit") {
            fine += 50;
        }
    }

    if (salary <= fine) {
        console.log("You have lost your salary.");
    } else {
        console.log(Math.trunc(salary - fine));
    }
}

salary([
    "10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"
]);