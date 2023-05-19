function vacationBooksList (input){

    let pagesInBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);

    let pagesPerDay = pagesInBook / daysPerBook;
    let hoursReadingPerDay = pagesPerDay / pagesPerHour;

    console.log (hoursReadingPerDay);

}

vacationBooksList (["212", "20", "2"]);
