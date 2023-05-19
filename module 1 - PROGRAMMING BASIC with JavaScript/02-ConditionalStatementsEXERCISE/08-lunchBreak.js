function lunchBreak (input) {

    let name = (input[0]);
    let duration = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = 0.125 * breakTime;
    let relaxTime = 0.25 * breakTime;
    let freeTime = breakTime - lunchTime - relaxTime;

    if (freeTime >= duration) {
        console.log (`You have enough time to watch ${name} and left with ${Math.ceil(freeTime - duration)} minutes free time.`);
    } else {
        console.log (`You don't have enough time to watch ${name}, you need ${Math.ceil(duration - freeTime)} more minutes.`);
    }

}

lunchBreak (["Teen Wolf", "48", "60"]);