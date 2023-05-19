function sumSeconds(input) {

    let secN1 = Number(input[0]);
    let secN2 = Number(input[1]);
    let secN3 = Number(input[2]);

    let totalTimeInSeconds = secN1 + secN2 + secN3;
    let totalMinutes = Math.floor(totalTimeInSeconds / 60);
    let totalSeconds = totalTimeInSeconds % 60;

    if (totalSeconds < 10) {
        console.log (`${totalMinutes}:0${totalSeconds}`);
    } else {
        console.log (`${totalMinutes}:${totalSeconds}`);
    }

}

sumSeconds(["35", "45", "44"]);