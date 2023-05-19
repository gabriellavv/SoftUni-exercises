function tennisRanklist(input) {

    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let pointsGain = 0;
    let wins = 0;

    for(let i = 2 ; i < tournamentsCount + 2 ; i++) {
        if (input[i] == "W") {
            pointsGain += 2000;
            wins++
        } else if (input[i] == "F") {
            pointsGain += 1200;
        } else if (input[i] == "SF") {
            pointsGain += 720;
        }
    }

    let averagePoints = pointsGain / tournamentsCount;

    console.log(`Final points: ${startingPoints + pointsGain}`);
    console.log(`Average points: ${Math.trunc(averagePoints)}`);
    console.log(`${(100/tournamentsCount * wins).toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);