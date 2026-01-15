function daysInAMonth(month, year) {

    // показва колко дни има в зададения месец в конкретната година:
    let days = new Date(year, month, 0).getDate();
    console.log(days)
}

daysInAMonth(1, 2012); // 31
daysInAMonth(2, 2021); // 28
