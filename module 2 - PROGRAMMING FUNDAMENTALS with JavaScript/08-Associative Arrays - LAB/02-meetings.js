function meetings(array) {

    let schedule = {};

    for (let data of array) {

        let [day, person] = data.split(" ");

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            schedule[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let element in schedule) {
        console.log(`${element} -> ${schedule[element]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);