function tseamAccount(input) {

    let games = input[0].split(" ");
    let gamesAfterUninstall = [];

    let index = 1;
    while (input[index] !== "Play!") {

        let commandAndGame = input[index].split(" ");
        let command = commandAndGame[0];
        let game = commandAndGame[1];

        switch (command) {

            case "Install":

                if (!games.includes(game)) {
                    games.push(game);
                } break;

            case "Uninstall":

                if (games.includes(game)) {

                    for (let i = 0; i < games.length; i++) {

                        let currentGame = games[i];

                        if (currentGame !== game) {
                            gamesAfterUninstall.push(currentGame);
                        }
                    }

                    games = gamesAfterUninstall;
                    gamesAfterUninstall = [];

                } break;

            case "Update":
                if (games.includes(game)) {

                    for (let i = 0; i < games.length; i++) {

                        let currentGame = games[i];

                        if (currentGame !== game) {
                            gamesAfterUninstall.push(currentGame);
                        }
                    }

                    gamesAfterUninstall.push(game);

                    games = gamesAfterUninstall;
                    gamesAfterUninstall = [];

                } break;

            case "Expansion":
                game = game.split("-");

                if (games.includes(game[0])) {

                    for (let i = 0; i < games.length; i++) {

                        let currentGame = games[i];
                        gamesAfterUninstall.push(currentGame);

                        if (currentGame === game[0]) {
                            gamesAfterUninstall.push(`${game[0]}:${game[1]}`);
                        }
                    }

                    games = gamesAfterUninstall;
                    gamesAfterUninstall = [];
                }
                break;
        }

        index++;
        
    }

    console.log(games.join(" "));
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);