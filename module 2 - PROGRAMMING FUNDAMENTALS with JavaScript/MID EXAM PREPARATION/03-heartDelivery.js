function heartDelivery(input) {

    let neighborhood = input[0].split("@").map(Number);
    let currIndex = 0;
    let missionCompleted = true;


    for (let i = 1; i < input.length; i++) {

        let [command, jumpLength] = input[i].split(" ");
        let indexToDecrease = currIndex + Number(jumpLength);
        

        switch (command) {

            case "Jump":

                if (indexToDecrease >= neighborhood.length) {
                    indexToDecrease = 0;
                }

                if (neighborhood[indexToDecrease] > 0) {

                    neighborhood[indexToDecrease] -= 2;

                    if (neighborhood[indexToDecrease] === 0) {
                        console.log(`Place ${indexToDecrease} has Valentine's day.`);
                    }

                } else {
                    console.log(`Place ${indexToDecrease} already had Valentine's day.`);
                }

                currIndex = indexToDecrease;
                break;


            case "Love!":
                console.log(`Cupid's last position was ${currIndex}.`);
                let failed = 0;

                for (let elements of neighborhood) {

                    if (elements !== 0) {
                        missionCompleted = false;
                        failed++;

                    }
                }

                if (missionCompleted) {
                    console.log("Mission was successful.");
                } else {
                    console.log(`Cupid has failed ${failed} places.`);
                }
                break;
        }
    }
}

heartDelivery([
    "10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"
]);