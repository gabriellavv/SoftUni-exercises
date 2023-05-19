function basketballTournament(input) {

    let index = 0;
    let tournamentName = input[index];
    let totalGamesCount = 0;
    let totalWinsCount = 0;
    let totalLossesCount = 0;


    while (tournamentName !== "End of tournaments") {

        let gamesCount = Number(input[++index]);

        for (let match = 1 ; match <= gamesCount ; match++) {

            let desiTeamScore = Number(input[++index]);
            let opponentTeamScore = Number(input[++index]);

            totalGamesCount++;

            if(desiTeamScore > opponentTeamScore) {
                totalWinsCount++;
                console.log(`Game ${match} of tournament ${tournamentName}: win with ${desiTeamScore - opponentTeamScore} points.`);
            } else {
                totalLossesCount++;
                console.log(`Game ${match} of tournament ${tournamentName}: lost with ${opponentTeamScore - desiTeamScore} points.`);
            }
        }

        tournamentName = input[++index];
    }

    console.log(`${((totalWinsCount / totalGamesCount) * 100).toFixed(2)}% matches win`);
    console.log(`${((totalLossesCount / totalGamesCount) * 100).toFixed(2)}% matches lost`);

}

basketballTournament(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])
