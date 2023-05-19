function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivingHour = Number(input[2]);
    let arrivingMinute = Number(input[3]);

    let examStart = examHour * 60 + examMinute;
    let arrival = arrivingHour * 60 + arrivingMinute;

    if (examStart < arrival) {
        console.log("Late");
    } else if ((arrival + 30) < examStart) {
        console.log("Early");
    } else {
        console.log("On time");
    }

    if (examStart - arrival >= 0 && examStart - arrival <= 59) {
        console.log(`${examStart - arrival} minutes before the start`);
    } else if (examStart - arrival >= 60) {
        let hourEarlier = Math.floor((examStart - arrival) / 60);
        let minutesEarlier = (examStart - arrival) % 60;
        if (minutesEarlier < 10) {
            console.log(`${hourEarlier}:0${minutesEarlier} hours before the start`);
        } else {
            console.log(`${hourEarlier}:${minutesEarlier} hours before the start`);
        }
    } else if ((arrival - examStart) < 60) {
        console.log(`${arrival - examStart} minutes after the start`);
    } else if ((arrival - examStart) >= 60) {
        let hourLater = Math.floor((arrival - examStart) / 60);
        let minutesLater = (arrival - examStart) % 60;
        if (minutesLater < 10) {
            console.log(`${hourLater}:0${minutesLater} hours after the start`);
        } else {
            console.log(`${hourLater}:${minutesLater} hours after the start`);
        }
    }
}
    onTimeForTheExam(["11", "30", "12", "29"]); 