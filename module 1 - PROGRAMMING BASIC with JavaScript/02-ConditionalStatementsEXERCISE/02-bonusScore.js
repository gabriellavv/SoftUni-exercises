function bonusScore (input) {

    let score = Number(input[0]);
    let bonus = 0.0
    let extraBonus = 0

    if (score <= 100) {
        bonus = 5;
    } else if (score <= 1000) {
        bonus = score * 0.2;
    } else {
        bonus = score * 0.1;
    }

    if ((score % 2) == 0) {
        extraBonus = 1;
    } else if ((score % 10) == 5) {
        extraBonus = 2;
    }

    console.log (bonus + extraBonus);
    console.log (score + bonus + extraBonus);
}

bonusScore (["20"]);