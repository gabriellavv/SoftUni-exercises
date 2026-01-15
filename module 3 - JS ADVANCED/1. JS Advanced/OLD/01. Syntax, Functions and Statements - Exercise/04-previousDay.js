function previousDay(year, month, day) {

    let date = new Date(year, month - 1, day);     // взимаме си датата от входа и вадим 1 от месеците, тъй като се броят от 0 до 11
    date.setDate(date.getDate() - 1);              // връщаме 1 ден назад от датата


    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);  // добавяме към месеците 1, за да принтира коректния за потребителя месец
}

previousDay(2016, 9, 30);  // 2016-9-29
previousDay(2015, 5, 10);  // 2015-5-9