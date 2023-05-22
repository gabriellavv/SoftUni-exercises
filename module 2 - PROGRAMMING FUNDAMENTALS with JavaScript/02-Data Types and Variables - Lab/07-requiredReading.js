function requiredReading(totalPages, pagesPerHour, daysPerBook) {

    let pagesPerDay = totalPages / daysPerBook;
    let hoursPerDay = pagesPerDay / pagesPerHour;

    console.log(hoursPerDay)
}

requiredReading(212, 20, 2);