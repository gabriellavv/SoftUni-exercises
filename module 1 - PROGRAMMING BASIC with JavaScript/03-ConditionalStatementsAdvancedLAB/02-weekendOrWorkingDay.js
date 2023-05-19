function weekendOrWorkingDay (input) {

    let day = (input[0]).toLowerCase();

    switch (day) {
        case "monday" : 
        case "Tuesday" : 
        case "Wednesday" : 
        case "Thursday" : 
        case "Friday" :  console.log("Working day"); break;
        case "Saturday" : 
        case "Sunday" : console.log("Weekend"); break;
        default: console.log("Error"); break;
    }
}

weekendOrWorkingDay (["Monday"]);
